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

/**
 * Divide the array into n pieces
 **/
export const divideArrIntoPieces = <T>(arr: T[], n: number) => {
  const newArray = [...arr]
  const arrList = []
  const idx = 0
  while(idx < newArray.length){
    arrList.push(newArray.splice(idx, idx+n))
  }
  return arrList
}
