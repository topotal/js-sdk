import React, { useContext } from 'react'
import { tint } from 'polished'
import { TextStyle } from 'react-native'

export type TextType =
  'display4' |
  'display3' |
  'display2' |
  'display1' |
  'caption' |
  'body' |
  'small_caption' |
  'small_body' |
  'x_small_body' |
  'x_small_caption'


const textStyles: { [key in TextType]: TextStyle }  = {
  display4:         { fontSize: 32, lineHeight: 36, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  display3:         { fontSize: 24, lineHeight: 28, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  display2:         { fontSize: 18, lineHeight: 22, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  display1:         { fontSize: 16, lineHeight: 20, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  caption:          { fontSize: 14, lineHeight: 18, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  body:             { fontSize: 14, lineHeight: 18, fontFamily: 'Noto Sans JP', fontWeight: '400' },
  small_caption:    { fontSize: 12, lineHeight: 16, fontFamily: 'Noto Sans JP', fontWeight: '700' },
  small_body:       { fontSize: 12, lineHeight: 16, fontFamily: 'Noto Sans JP', fontWeight: '400' },
  x_small_body:     { fontSize: 10, lineHeight: 14, fontFamily: 'Noto Sans JP', fontWeight: '400' },
  x_small_caption:  { fontSize: 10, lineHeight: 14, fontFamily: 'Noto Sans JP', fontWeight: '700' },
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
