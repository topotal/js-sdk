export const times = (n: number, func: (index: number) => void) => {
  [...Array(n)].map((_, i) => {
    func(i)
  })
}

export const timesMap = <T>(n: number, func: (index: number) => T): T[] => {
  const items: T[] = [];

  [...Array(n)].map((_, i) => {
    items.push(func(i))
  })

  return items
}
