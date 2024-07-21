import { describe } from 'node:test'
import type { Scores } from './types'

/**
 * Sorts the given scores object based on the total score in ascending order.
 *
 * @param {Scores} scores - The scores object to be sorted.
 * @return {Scores} - The sorted scores object.
 */
export function sortScores(scores: Scores) {
  return Object.fromEntries(Object.entries(scores).sort((a, b) => a[1].total - b[1].total))
}

// test the sortScores function
describe()
