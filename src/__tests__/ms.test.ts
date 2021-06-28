import { ms } from '../ms'

describe('ms(string)', () => {
  it('should preserve ms', function () {
    expect(ms('100')).toBe(100)
  })

  it('should convert from m to ms', function () {
    expect(ms('1m')).toBe(60000)
  })

  it('should convert from m to ms', function () {
    expect(ms('1m')).toBe(60000)
  })

  it('should convert from h to ms', function () {
    expect(ms('1h')).toBe(3600000)
  })

  it('should convert d to ms', function () {
    expect(ms('2d')).toBe(172800000)
  })

  it('should convert w to ms', function () {
    expect(ms('3w')).toBe(1814400000)
  })

  it('should convert s to ms', function () {
    expect(ms('1s')).toBe(1000)
  })

  it('should convert ms to ms', function () {
    expect(ms('100ms')).toBe(100)
  })

  it('should work with decimals', function () {
    expect(ms('1.5h')).toBe(5400000)
  })

  it('should work with multiple spaces', function () {
    expect(ms('1   s')).toBe(1000)
  })

  // it('should return NaN if invalid', function () {
  //   expect(isNaN(ms('☃'))).toBe(true)
  //   expect(isNaN(ms('10-.5'))).toBe(true)
  // })

  it('should be case-insensitive', function () {
    expect(ms('1.5H')).toBe(5400000)
  })

  it('should work with numbers starting with .', function () {
    expect(ms('.5ms')).toBe(0.5)
  })

  it('should work with negative integers', function () {
    expect(ms('-100ms')).toBe(-100)
  })

  it('should work with negative decimals', function () {
    expect(ms('-1.5h')).toBe(-5400000)
    expect(ms('-10.5h')).toBe(-37800000)
  })

  it('should work with negative decimals starting with "."', function () {
    expect(ms('-.5h')).toBe(-1800000)
  })
})

describe('ms(long string)', () => {
  it('should convert milliseconds to ms', () => {
    expect(ms('53 milliseconds')).toBe(53)
  })

  it('should convert msecs to ms', () => {
    expect(ms('17 msecs')).toBe(17)
  })

  it('should convert sec to ms', () => {
    expect(ms('1 sec')).toBe(1000)
  })

  it('should convert from min to ms', () => {
    expect(ms('1 min')).toBe(60000)
  })

  it('should convert from hr to ms', () => {
    expect(ms('1 hr')).toBe(3600000)
  })

  it('should convert days to ms', () => {
    expect(ms('2 days')).toBe(172800000)
  })

  it('should work with decimals', () => {
    expect(ms('1.5 hours')).toBe(5400000)
  })

  it('should work with negative integers', () => {
    expect(ms('-100 milliseconds')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(ms('-1.5 hours')).toBe(-5400000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(ms('-.5 hr')).toBe(-1800000)
  })
})

describe('ms(number, { long: true })', () => {
  it('should support milliseconds', () => {
    expect(ms(500, { long: true })).toBe('500 ms')

    expect(ms(-500, { long: true })).toBe('-500 ms')
  })

  it('should support seconds', () => {
    expect(ms(1000, { long: true })).toBe('1 second')
    expect(ms(1200, { long: true })).toBe('1 second')
    expect(ms(10000, { long: true })).toBe('10 seconds')

    expect(ms(-1000, { long: true })).toBe('-1 second')
    expect(ms(-1200, { long: true })).toBe('-1 second')
    expect(ms(-10000, { long: true })).toBe('-10 seconds')
  })

  it('should support minutes', () => {
    expect(ms(60 * 1000, { long: true })).toBe('1 minute')
    expect(ms(60 * 1200, { long: true })).toBe('1 minute')
    expect(ms(60 * 10000, { long: true })).toBe('10 minutes')

    expect(ms(-1 * 60 * 1000, { long: true })).toBe('-1 minute')
    expect(ms(-1 * 60 * 1200, { long: true })).toBe('-1 minute')
    expect(ms(-1 * 60 * 10000, { long: true })).toBe('-10 minutes')
  })

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000, { long: true })).toBe('1 hour')
    expect(ms(60 * 60 * 1200, { long: true })).toBe('1 hour')
    expect(ms(60 * 60 * 10000, { long: true })).toBe('10 hours')

    expect(ms(-1 * 60 * 60 * 1000, { long: true })).toBe('-1 hour')
    expect(ms(-1 * 60 * 60 * 1200, { long: true })).toBe('-1 hour')
    expect(ms(-1 * 60 * 60 * 10000, { long: true })).toBe('-10 hours')
  })

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000, { long: true })).toBe('1 day')
    expect(ms(24 * 60 * 60 * 1200, { long: true })).toBe('1 day')
    expect(ms(24 * 60 * 60 * 10000, { long: true })).toBe('10 days')

    expect(ms(-1 * 24 * 60 * 60 * 1000, { long: true })).toBe('-1 day')
    expect(ms(-1 * 24 * 60 * 60 * 1200, { long: true })).toBe('-1 day')
    expect(ms(-1 * 24 * 60 * 60 * 10000, { long: true })).toBe('-10 days')
  })

  it('should round', () => {
    expect(ms(234234234, { long: true })).toBe('3 days')

    expect(ms(-234234234, { long: true })).toBe('-3 days')
  })
})

describe('ms(number)', () => {
  it('should support milliseconds', () => {
    expect(ms(500)).toBe('500ms')

    expect(ms(-500)).toBe('-500ms')
  })

  it('should support seconds', () => {
    expect(ms(1000)).toBe('1s')
    expect(ms(10000)).toBe('10s')

    expect(ms(-1000)).toBe('-1s')
    expect(ms(-10000)).toBe('-10s')
  })

  it('should support minutes', () => {
    expect(ms(60 * 1000)).toBe('1m')
    expect(ms(60 * 10000)).toBe('10m')

    expect(ms(-1 * 60 * 1000)).toBe('-1m')
    expect(ms(-1 * 60 * 10000)).toBe('-10m')
  })

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000)).toBe('1h')
    expect(ms(60 * 60 * 10000)).toBe('10h')

    expect(ms(-1 * 60 * 60 * 1000)).toBe('-1h')
    expect(ms(-1 * 60 * 60 * 10000)).toBe('-10h')
  })

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000)).toBe('1d')
    expect(ms(24 * 60 * 60 * 10000)).toBe('10d')

    expect(ms(-1 * 24 * 60 * 60 * 1000)).toBe('-1d')
    expect(ms(-1 * 24 * 60 * 60 * 10000)).toBe('-10d')
  })

  it('should round', () => {
    expect(ms(234234234)).toBe('3d')

    expect(ms(-234234234)).toBe('-3d')
  })
})

describe('ms(invalid inputs)', function () {
  it('should throw an error, when ms("")', function () {
    expect(function () {
      ms('')
    }).toThrowError()
  })

  it('should throw an error, when ms(NaN)', function () {
    expect(function () {
      ms(NaN)
    }).toThrowError()
  })

  it('should throw an error, when ms(Infinity)', function () {
    expect(function () {
      ms(Infinity)
    }).toThrowError()
  })

  it('should throw an error, when ms(-Infinity)', function () {
    expect(function () {
      ms(-Infinity)
    }).toThrowError()
  })
})
