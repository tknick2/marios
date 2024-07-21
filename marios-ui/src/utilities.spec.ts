import { describe, it, expect } from 'vitest'
import { sortScores } from './utilities'

describe('Utilities', () => {
  it('returns the Scores object sorted in ascending order by total', () => {
    const scores = {
      P8: { total: 8, lastRace: 8 },
      P7: { total: 7, lastRace: 7 },
      P6: { total: 6, lastRace: 6 },
      P5: { total: 5, lastRace: 5 },
      P4: { total: 4, lastRace: 4 },
      P3: { total: 3, lastRace: 3 },
      P2: { total: 2, lastRace: 2 },
      P1: { total: 1, lastRace: 1 }
    }

    const sortedScores = {
      P1: { total: 1, lastRace: 1 },
      P2: { total: 2, lastRace: 2 },
      P3: { total: 3, lastRace: 3 },
      P4: { total: 4, lastRace: 4 },
      P5: { total: 5, lastRace: 5 },
      P6: { total: 6, lastRace: 6 },
      P7: { total: 7, lastRace: 7 },
      P8: { total: 8, lastRace: 8 }
    }

    expect(sortScores(scores)).toEqual(sortedScores)
  })
})
