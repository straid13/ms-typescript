import { fmtLong } from './utils/fmtLong'
import { fmtShort } from './utils/fmtShort'
import { parse } from './utils/parse'

interface Options {
  long: boolean
}

const DEFAULT_OPTS = {
  long: false,
}

const toMs = (val: string | number): number => {
  const preparedVal = typeof val === 'string' ? val : `${val}`

  if (preparedVal.length > 0) {
    return parse(preparedVal)
  }

  throw new Error('val is not a non-empty string. val=' + JSON.stringify(val))
}

const fromMs = (val: number | string, opts: Options = DEFAULT_OPTS): string => {
  const preparedVal = typeof val === 'number' ? val : parseInt(val)

  if (isFinite(preparedVal)) {
    return opts.long ? fmtLong(preparedVal) : fmtShort(preparedVal)
  }

  throw new Error('val is not a a valid number. val=' + JSON.stringify(preparedVal))
}

export { toMs, fromMs }
