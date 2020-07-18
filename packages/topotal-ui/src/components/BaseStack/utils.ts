export const getCellStyle = (
  direction: 'row' | 'column',
  gap: number,
  index: number
) => {
  const key = direction === 'row' ? 'marginLeft' : 'marginTop'
  return {
    [key]: index === 0 ? 0 : gap,
  }
}
