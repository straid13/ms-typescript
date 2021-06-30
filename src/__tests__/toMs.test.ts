import { toMs } from '../ms'

describe('toMs(string)', () => {
  it('should preserve ms', function () {
    expect(toMs('100')).toBe(100)
  })

  it('should convert from m to ms', function () {
    expect(toMs('1m')).toBe(60000)
  })

  it('should convert from m to ms', function () {
    expect(toMs('1m')).toBe(60000)
  })

  it('should convert from h to ms', function () {
    expect(toMs('1h')).toBe(3600000)
  })

  it('should convert d to ms', function () {
    expect(toMs('2d')).toBe(172800000)
  })

  it('should convert w to ms', function () {
    expect(toMs('3w')).toBe(1814400000)
  })

  it('should convert s to ms', function () {
    expect(toMs('1s')).toBe(1000)
  })

  it('should convert ms to ms', function () {
    expect(toMs('100ms')).toBe(100)
  })

  it('should work with decimals', function () {
    expect(toMs('1.5h')).toBe(5400000)
  })

  it('should work with multiple spaces', function () {
    expect(toMs('1   s')).toBe(1000)
  })

  it('should be case-insensitive', function () {
    expect(toMs('1.5H')).toBe(5400000)
  })

  it('should work with numbers starting with .', function () {
    expect(toMs('.5ms')).toBe(0.5)
  })

  it('should work with negative integers', function () {
    expect(toMs('-100ms')).toBe(-100)
  })

  it('should work with negative decimals', function () {
    expect(toMs('-1.5h')).toBe(-5400000)
    expect(toMs('-10.5h')).toBe(-37800000)
  })

  it('should work with negative decimals starting with "."', function () {
    expect(toMs('-.5h')).toBe(-1800000)
  })
})

describe('toMs(long string)', () => {
  it('should convert milliseconds to ms', () => {
    expect(toMs('53 milliseconds')).toBe(53)
  })

  it('should convert msecs to ms', () => {
    expect(toMs('17 msecs')).toBe(17)
  })

  it('should convert sec to ms', () => {
    expect(toMs('1 sec')).toBe(1000)
  })

  it('should convert from min to ms', () => {
    expect(toMs('1 min')).toBe(60000)
  })

  it('should convert from hr to ms', () => {
    expect(toMs('1 hr')).toBe(3600000)
  })

  it('should convert days to ms', () => {
    expect(toMs('2 days')).toBe(172800000)
  })

  it('should work with decimals', () => {
    expect(toMs('1.5 hours')).toBe(5400000)
  })

  it('should work with negative integers', () => {
    expect(toMs('-100 milliseconds')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(toMs('-1.5 hours')).toBe(-5400000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(toMs('-.5 hr')).toBe(-1800000)
  })
})

describe('ms(invalid inputs)', function () {
  it('should throw an error, when ms("")', function () {
    expect(function () {
      toMs('')
    }).toThrowError()
  })
})
