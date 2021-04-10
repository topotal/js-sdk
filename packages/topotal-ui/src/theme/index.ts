import React, { useContext } from 'react'
import { TextStyle } from 'react-native'

export type FontWeight = 'normal' | 'bold'

export type TextType =
  'display2' |
  'display1' |
  'body' |
  'small_body'

const textStyles: { [key in TextType]: TextStyle } = {
  display2: { fontSize: 18, lineHeight: 26, fontFamily: 'Noto Sans JP' },
  display1: { fontSize: 14, lineHeight: 20, fontFamily: 'Noto Sans JP' },
  body: { fontSize: 12, lineHeight: 17, fontFamily: 'Noto Sans JP' },
  small_body: { fontSize: 10, lineHeight: 14, fontFamily: 'Noto Sans JP' },
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
    cancel: '#666666',
    cancelLight: '#E5E5E5',
    cancelDark: '#4F4F4F',
    primaryTextDark: palette.sumi,
    secandaryTextDark: palette.katana,
    primaryTextLight: palette.yuki,
    secandaryTextLight: palette.kasumi,
    primary: '#1765C1',
    primaryLight: '#D7E9FF',
    primaryDark: '#124F97',
    success: '#3A7D21',
    successLight: '#CEF8BF',
    successDark: '#23650B',
    warning: '#7A6700',
    warningLight: '#FAE88A',
    warningDark: '#615200',
    error: '#AF0808',
    errorLight: '#FDDBD8',
    errorDark: '#8D0707',
    transparent: 'transparent',
    shadow: '#CCCCCC',
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

export interface ScrollManipulater {
  getScrollY: () => number
}
const defaultScrollManipulater: ScrollManipulater = {
  getScrollY: () => { return 0 },
}
export const ScrollManipulaterContext = React.createContext(defaultScrollManipulater)

export const useScrollManipulater = () => {
  return useContext(ScrollManipulaterContext)
}
