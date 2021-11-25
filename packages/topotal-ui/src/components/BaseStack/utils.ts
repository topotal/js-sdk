import { ReactElement } from 'react'
import { isElement } from 'react-is'

export const getCellStyle = (
  direction: 'row' | 'column',
  gap: number,
  index: number,
) => {
  const key = direction === 'row' ? 'marginLeft' : 'marginTop'
  return {
    [key]: index === 0 ? 0 : gap,
  }
}

export const isDOMTypeElement = (element: ReactElement) => {
  return isElement(element) && typeof element.type === 'string'
}
