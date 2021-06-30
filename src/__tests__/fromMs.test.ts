import { fromMs } from '../ms'

describe('ms(number, { long: true })', () => {
  it('should support milliseconds', () => {
    expect(fromMs(500, { long: true })).toBe('500 ms')

    expect(fromMs(-500, { long: true })).toBe('-500 ms')
  })

  it('should support seconds', () => {
    expect(fromMs(1000, { long: true })).toBe('1 second')
    expect(fromMs(1200, { long: true })).toBe('1 second')
    expect(fromMs(10000, { long: true })).toBe('10 seconds')

    expect(fromMs(-1000, { long: true })).toBe('-1 second')
    expect(fromMs(-1200, { long: true })).toBe('-1 second')
    expect(fromMs(-10000, { long: true })).toBe('-10 seconds')
  })

  it('should support minutes', () => {
    expect(fromMs(60 * 1000, { long: true })).toBe('1 minute')
    expect(fromMs(60 * 1200, { long: true })).toBe('1 minute')
    expect(fromMs(60 * 10000, { long: true })).toBe('10 minutes')

    expect(fromMs(-1 * 60 * 1000, { long: true })).toBe('-1 minute')
    expect(fromMs(-1 * 60 * 1200, { long: true })).toBe('-1 minute')
    expect(fromMs(-1 * 60 * 10000, { long: true })).toBe('-10 minutes')
  })

  it('should support hours', () => {
    expect(fromMs(60 * 60 * 1000, { long: true })).toBe('1 hour')
    expect(fromMs(60 * 60 * 1200, { long: true })).toBe('1 hour')
    expect(fromMs(60 * 60 * 10000, { long: true })).toBe('10 hours')

    expect(fromMs(-1 * 60 * 60 * 1000, { long: true })).toBe('-1 hour')
    expect(fromMs(-1 * 60 * 60 * 1200, { long: true })).toBe('-1 hour')
    expect(fromMs(-1 * 60 * 60 * 10000, { long: true })).toBe('-10 hours')
  })

  it('should support days', () => {
    expect(fromMs(24 * 60 * 60 * 1000, { long: true })).toBe('1 day')
    expect(fromMs(24 * 60 * 60 * 1200, { long: true })).toBe('1 day')
    expect(fromMs(24 * 60 * 60 * 10000, { long: true })).toBe('10 days')

    expect(fromMs(-1 * 24 * 60 * 60 * 1000, { long: true })).toBe('-1 day')
    expect(fromMs(-1 * 24 * 60 * 60 * 1200, { long: true })).toBe('-1 day')
    expect(fromMs(-1 * 24 * 60 * 60 * 10000, { long: true })).toBe('-10 days')
  })

  it('should round', () => {
    expect(fromMs(234234234, { long: true })).toBe('3 days')

    expect(fromMs(-234234234, { long: true })).toBe('-3 days')
  })
})

describe('ms(number)', () => {
  it('should support milliseconds', () => {
    expect(fromMs(500)).toBe('500ms')

    expect(fromMs(-500)).toBe('-500ms')
  })

  it('should support seconds', () => {
    expect(fromMs(1000)).toBe('1s')
    expect(fromMs(10000)).toBe('10s')

    expect(fromMs(-1000)).toBe('-1s')
    expect(fromMs(-10000)).toBe('-10s')
  })

  it('should support minutes', () => {
    expect(fromMs(60 * 1000)).toBe('1m')
    expect(fromMs(60 * 10000)).toBe('10m')

    expect(fromMs(-1 * 60 * 1000)).toBe('-1m')
    expect(fromMs(-1 * 60 * 10000)).toBe('-10m')
  })

  it('should support hours', () => {
    expect(fromMs(60 * 60 * 1000)).toBe('1h')
    expect(fromMs(60 * 60 * 10000)).toBe('10h')

    expect(fromMs(-1 * 60 * 60 * 1000)).toBe('-1h')
    expect(fromMs(-1 * 60 * 60 * 10000)).toBe('-10h')
  })

  it('should support days', () => {
    expect(fromMs(24 * 60 * 60 * 1000)).toBe('1d')
    expect(fromMs(24 * 60 * 60 * 10000)).toBe('10d')

    expect(fromMs(-1 * 24 * 60 * 60 * 1000)).toBe('-1d')
    expect(fromMs(-1 * 24 * 60 * 60 * 10000)).toBe('-10d')
  })

  it('should round', () => {
    expect(fromMs(234234234)).toBe('3d')

    expect(fromMs(-234234234)).toBe('-3d')
  })
})

describe('ms(invalid inputs)', function () {
  it('should throw an error, when ms(NaN)', function () {
    expect(function () {
      fromMs(NaN)
    }).toThrowError()
  })

  it('should throw an error, when ms(Infinity)', function () {
    expect(function () {
      fromMs(Infinity)
    }).toThrowError()
  })

  it('should throw an error, when ms(-Infinity)', function () {
    expect(function () {
      fromMs(-Infinity)
    }).toThrowError()
  })
})
