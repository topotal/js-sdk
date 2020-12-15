import React, { useContext } from 'react'
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

export const palette = {
  yuki: '#FFFFFF',
  kasumi: '#F8F8F8',
  kemuri: '#DEDEDE',
  katana: '#999999',
  sumi: '#061D37',
  yami: '#030C17',
}

export const defaultTheme = {
  color: {
    background: palette.kasumi,
    backgroundDark: palette.yami,
    surface: palette.yuki,
    surfaceDark: palette.sumi,
    borderLight: palette.kemuri,
    borderDark: palette.sumi,
    cancel: palette.katana,
    primaryTextDark: palette.sumi,
    secandaryTextDark: palette.katana,
    primaryTextLight: palette.yuki,
    secandaryTextLight: palette.kasumi,
    primary: '#1765C1',
    primaryLight: '#D7E9FF',
    primaryDark: '#124F97',
    positive: '#42C115',
    positiveLight: '#C7F7B6',
    positiveDark: '#349711',
    warning: '#F6CF00',
    warningLight: '#FBEC9D',
    warningDark: '#C6A600',
    error: '#F64141',
    errorLight: '#FDD6D3',
    errorVeryDark: '#C80909',
    transparent: 'transparent',
  },
  radius: {
    level1: 4,
    level2: 8,
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
  iconBasePath: '/icons',
} as const

export type Theme = typeof defaultTheme
export type ThemeColor = typeof defaultTheme.color
export type PaletteColor = typeof palette

export const ThemeContext = React.createContext(defaultTheme)

export const useTheme = () => {
  return useContext(ThemeContext)
}
