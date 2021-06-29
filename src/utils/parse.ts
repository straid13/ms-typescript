import {
  D,
  DAY_TYPES,
  H,
  HOUR_TYPES,
  M,
  MINUTE_TYPES,
  MS_TYPES,
  S,
  SECONDS_TYPES,
  W,
  WEEK_TYPES,
  Y,
  YEAR_TYPES,
} from './constants'

export const parse = (str: string): number => {
  if (str.length > 100) {
    return 0
  }

  const match =
    /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    )

  if (!match) {
    return 0
  }

  const n = parseFloat(match[1])
  const type = (match[2] || 'ms').toLowerCase()

  if (YEAR_TYPES.has(type)) {
    return n * Y
  }

  if (WEEK_TYPES.has(type)) {
    return n * W
  }

  if (DAY_TYPES.has(type)) {
    return n * D
  }

  if (HOUR_TYPES.has(type)) {
    return n * H
  }

  if (MINUTE_TYPES.has(type)) {
    return n * M
  }

  if (SECONDS_TYPES.has(type)) {
    return n * S
  }

  if (MS_TYPES.has(type)) {
    return n
  }

  return 0
}
