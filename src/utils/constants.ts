export const S = 1000
export const M = S * 60
export const H = M * 60
export const D = H * 24
export const W = D * 7
export const Y = D * 365.25

export const YEAR_TYPES = new Set(['years', 'year', 'yrs', 'yr', 'y'])
export const WEEK_TYPES = new Set(['weeks', 'week', 'w'])
export const DAY_TYPES = new Set(['days', 'day', 'd'])
export const HOUR_TYPES = new Set(['hours', 'hour', 'hrs', 'hr', 'h'])
export const MINUTE_TYPES = new Set(['minutes', 'minute', 'mins', 'min', 'm'])
export const SECONDS_TYPES = new Set(['seconds', 'second', 'secs', 'sec', 's'])
export const MS_TYPES = new Set(['milliseconds', 'millisecond', 'msecs', 'msec', 'ms'])
