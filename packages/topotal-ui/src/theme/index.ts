import React, { useContext } from 'react'
import { tint } from 'polished'
import { TextStyle } from 'react-native'

export type FontWeight = 'normal' | 'bold'

export type TextType =
  'display2' |
  'display1' |
  'body' |
  'small_body'


const textStyles: { [key in TextType]: TextStyle } = {
  display2:     { fontSize: 18, lineHeight: 26, fontFamily: 'Noto Sans JP' },
  display1:     { fontSize: 14, lineHeight: 20, fontFamily: 'Noto Sans JP' },
  body:         { fontSize: 12, lineHeight: 17, fontFamily: 'Noto Sans JP' },
  small_body:   { fontSize: 10, lineHeight: 14, fontFamily: 'Noto Sans JP' },
}

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
    primary: '#1765C1',
    primaryDark: '#124F97',
    primaryLite: '#D7E9FF',
    transparent: 'transparent',
  },
  radius: {
    level1: 4,
  },
  shadow: {
    level1: '0px 1px 4px 0px rgba(0, 0, 0, .2)',
    level2: '0px 2px 8px 0px rgba(0, 0, 0, .5)',
  },
  text: {
    type: textStyles,
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

export const useTheme = () => {
  return useContext(ThemeContext)
}

export default theme
