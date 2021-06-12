export interface Properties {
  className: string[]
}

export interface TextChildData {
  type: 'text'
  value: string
}

export interface ElementChildData {
  type: 'element'
  tag: 'span'
  properties: Properties
  children: ChildData[]
}

export type ChildData = TextChildData | ElementChildData

export interface StyleSheetData {
  [key: string]: {
    color: string
  }
}
