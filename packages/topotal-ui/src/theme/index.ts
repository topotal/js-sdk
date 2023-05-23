import React, { useContext } from 'react'
import { TextStyle } from 'react-native'

export type FontWeight = 'normal' | 'bold'

export type TextType =
  'display4' |
  'display3' |
  'display2' |
  'display1' |
  'body' |
  'small_body'

export const textStyles: { [key in TextType]: TextStyle } = {
  display4: { fontSize: 32, lineHeight: 64, fontFamily: 'Noto Sans JP' },
  display3: { fontSize: 24, lineHeight: 48, fontFamily: 'Noto Sans JP' },
  display2: { fontSize: 18, lineHeight: 36, fontFamily: 'Noto Sans JP' },
  display1: { fontSize: 14, lineHeight: 28, fontFamily: 'Noto Sans JP' },
  body: { fontSize: 12, lineHeight: 24, fontFamily: 'Noto Sans JP' },
  small_body: { fontSize: 10, lineHeight: 20, fontFamily: 'Noto Sans JP' },
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
    cancelDark: '#5E5E5E',
    primaryTextDark: palette.sumi,
    secondaryTextDark: palette.katana,
    primaryTextLight: palette.yuki,
    secondaryTextLight: palette.kasumi,
    primary: '#1765C1',
    primaryLight: '#D7E9FF',
    primaryDark: '#124F97',
    success: '#2BA100',
    successLight: '#DAFFCC',
    successDark: '#1F7500',
    warning: '#f57d02',
    warningLight: '#FFEDD1',
    warningDark: '#a95500',
    error: '#D60A0A',
    errorLight: '#FEE8E7',
    errorDark: '#9C0707',
    transparent: 'transparent',
    shadow: '#CCCCCC',
    focus: '#bcdcff',
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
}

export type ThemeColor = typeof defaultTheme.color
export type PaletteColor = typeof palette
export type BorderRadius = typeof defaultTheme.radius
export type Theme = typeof defaultTheme

export const ThemeContext = React.createContext(defaultTheme)

export const useTheme = () => {
  return useContext(ThemeContext)
}

export interface ScrollManipulator {
  getScrollY: () => number
}
const defaultScrollManipulator: ScrollManipulator = {
  getScrollY: () => { return 0 },
}
export const ScrollManipulatorContext = React.createContext(defaultScrollManipulator)

export const useScrollManipulator = () => {
  return useContext(ScrollManipulatorContext)
}
