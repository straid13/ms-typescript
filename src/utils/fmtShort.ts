import { D, H, M, S } from './constants'

export const fmtShort = (ms: number): string => {
  const msAbs = Math.abs(ms)

  if (msAbs >= D) {
    return `${Math.round(ms / D)}d`
  }

  if (msAbs >= H) {
    return `${Math.round(ms / H)}h`
  }

  if (msAbs >= M) {
    return `${Math.round(ms / M)}m`
  }

  if (msAbs >= S) {
    return `${Math.round(ms / S)}s`
  }

  return `${ms}ms`
}
