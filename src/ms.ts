import { fmtLong } from './utils/fmtLong'
import { fmtShort } from './utils/fmtShort'
import { parse } from './utils/parse'

type Options = {
  long: boolean
}

const DEFAULT_OPTS = {
  long: false,
}

type MSReturnType = number | string | undefined

const ms = (val: string | number, opts: Options = DEFAULT_OPTS): MSReturnType => {
  if (typeof val === 'string' && val.length > 0) {
    return parse(val)
  }

  if (typeof val === 'number' && isFinite(val)) {
    return opts.long ? fmtLong(val) : fmtShort(val)
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

export { ms }
