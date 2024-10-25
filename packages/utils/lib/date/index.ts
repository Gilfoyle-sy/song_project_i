import moment, { MomentInput } from 'moment'

/**
 * Formats a date to a timestamp.
 *
 * @export
 * @param {MomentInput} date
 * @returns {number}
 */
export function formatDateToTimestamp(date: MomentInput): number {
  return moment(date).valueOf()
}
