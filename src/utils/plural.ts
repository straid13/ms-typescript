export const plural = (ms: number, msAbs: number, n: number, name: string): string => {
  const isPlural = msAbs >= n * 1.5
  return `${Math.round(ms / n)} ${name}${isPlural ? 's' : ''}`
}
