import { D, H, M, S } from './constants'
import { plural } from './plural'

export const fmtLong = (ms: number): string => {
  const msAbs = Math.abs(ms)

  if (msAbs >= D) {
    return plural(ms, msAbs, D, 'day')
  }

  if (msAbs >= H) {
    return plural(ms, msAbs, H, 'hour')
  }

  if (msAbs >= M) {
    return plural(ms, msAbs, M, 'minute')
  }

  if (msAbs >= S) {
    return plural(ms, msAbs, S, 'second')
  }

  return `${ms} ms`
}
