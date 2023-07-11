import { ToggleSwitchSize } from './'

interface ToggleSwitchStyle {
  onPosition: number
  offPosition: number
  height: number
  width: number
  animatedHeight: number
  animatedWidth: number
  paddingInner: number
}


export const getStylefromSize = (size: ToggleSwitchSize): ToggleSwitchStyle => {
  switch (size) {
    case 'large':
      return {
        onPosition: 32,
        offPosition: 0,
        height: 32,
        width: 64,
        animatedHeight: 26,
        animatedWidth: 26,
        paddingInner: 3,
      }

    case 'medium':
      return {
        onPosition: 20,
        offPosition: 0,
        height: 24,
        width: 44,
        animatedHeight: 20,
        animatedWidth: 20,
        paddingInner: 2,
      }

    case 'small':
      return {
        onPosition: 20,
        offPosition: 0,
        height: 18,
        width: 40,
        animatedHeight: 18,
        animatedWidth: 18,
        paddingInner: 0,
      }
  }
}
