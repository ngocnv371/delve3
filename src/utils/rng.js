/**
 * generate a randome number in a given range, include both min and max
 * @param {number} min lower limit (included)
 * @param {number} max upper limit (included)
 * @returns number
 */
export function range(min, max) {
  return min + Math.round(Math.random() * (max - min))
}
