// Mulberry32 — fast, seedable PRNG good enough for question shuffling
function mulberry32(seed: number) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Fisher-Yates shuffle driven by the seeded PRNG
export function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr]
  const rand = mulberry32(seed)
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function generateSeed(): number {
  return Math.floor(Math.random() * 2 ** 32)
}

/**
 * Select `count` questions from `pool` using `seed`.
 * Questions with weight >= 2.0 are always included (deal-breakers).
 * Remaining slots are filled from randomly shuffled non-required questions.
 * The final selection is then shuffled again so required questions
 * don't always appear first.
 */
export function selectQuestions<T extends { weight?: number }>(
  pool: T[],
  count: number,
  seed: number
): T[] {
  if (count >= pool.length) return pool

  const required = pool.filter((q) => (q.weight ?? 1) >= 2)
  const optional = pool.filter((q) => (q.weight ?? 1) < 2)

  const optionalNeeded = Math.max(0, count - required.length)
  const shuffledOptional = seededShuffle(optional, seed)
  const selected = [...required, ...shuffledOptional.slice(0, optionalNeeded)]

  // Shuffle the combined set so required questions appear in random positions
  return seededShuffle(selected, seed + 1)
}
