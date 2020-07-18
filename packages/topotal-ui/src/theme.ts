import React from 'react'
import { tint } from 'polished'
import { TextStyle } from 'react-native'

export const textTypes = [
  'display4',
  'display3',
  'display2',
  'display1',
  'caption',
  'body',
  'small_caption',
  'small_body',
  'x_small_body',
  'x_small_caption',
] as const

export type TextType = typeof textTypes[number]

type TextStyleData = {
  name: TextType
  size: number
  fontFamily: string
}

const textStyles: TextStyleData[] = [
  { name: 'display4', size: 32, fontFamily: 'NotoSansJP-Bold' },
  { name: 'display3', size: 24, fontFamily: 'NotoSansJP-Bold' },
  { name: 'display2', size: 18, fontFamily: 'NotoSansJP-Bold' },
  { name: 'display1', size: 16, fontFamily: 'NotoSansJP-Bold' },
  { name: 'caption', size: 14, fontFamily: 'NotoSansJP-Bold' },
  { name: 'body', size: 14, fontFamily: 'NotoSansJP-Regular' },
  { name: 'small_caption', size: 12, fontFamily: 'NotoSansJP-Bold' },
  { name: 'small_body', size: 12, fontFamily: 'NotoSansJP-Regular' },
  { name: 'x_small_body', size: 10, fontFamily: 'NotoSansJP-Regular' },
  { name: 'x_small_caption', size: 10, fontFamily: 'NotoSansJP-Bold' },
]

type TextStyleTheme = { [key: string]: TextStyle }

const generateTextTypeTheme = () => {
  const textTypeTheme: TextStyleTheme = {}
  textStyles.forEach(data => {
    textTypeTheme[data.name] = {
      fontSize: data.size,
      lineHeight: data.size + 4,
      fontFamily: data.fontFamily,
    }
  })
  return textTypeTheme
}

const primary = '#00b894'
const negative = '#d63031'
const positive = '#00AC00'
const theme = {
  color: {
    yuki: '#FFFFFF',
    kasumi: '#F4F7FA',
    kemuri: '#b2bec3',
    katana: '#636e72',
    sumi: '#2d3436',
    positive: positive,
    positiveLite: tint(0.7, positive),
    positiveVeryLite: tint(0.95, positive),
    negative: negative,
    negativeLite: tint(0.7, negative),
    negativeVeryLite: tint(0.95, negative),
    primary: primary,
    primaryLite: tint(0.7, primary),
    primaryVeryLite: tint(0.85, primary),
    secondary: '#0984e3',
    transparent: 'transparent',
  },
  radius: {
    level1: 8,
  },
  shadow: {
    level1: '0px 1px 4px 0px rgba(0, 0, 0, .2)',
    level2: '0px 2px 8px 0px rgba(0, 0, 0, .5)',
  },
  text: {
    type: generateTextTypeTheme(),
  },
  zIndex: {
    level0: 0,
    level1: 100,
    level2: 200,
    level3: 300,
    level4: 400,
  },
} as const

export type Theme = typeof theme
export type Color = typeof theme.color

export const ThemeContext = React.createContext(theme)

export default theme
