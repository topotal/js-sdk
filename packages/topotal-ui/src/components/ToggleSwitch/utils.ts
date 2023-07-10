import { ToggleSwitchSize } from './'

interface ToggleSwitchStyle {
  onPosition: number
  offPosition: number
  height: number
  width: number
  animatedHeight: number
  animatedWidth: number
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
      }

    case 'medium':
      return {
        onPosition: 20,
        offPosition: 0,
        height: 24,
        width: 44,
        animatedHeight: 20,
        animatedWidth: 20,
      }

    default:
      // 呼ばれることはないがデフォはlargeを返す
      return {
        onPosition: 24,
        offPosition: 0,
        height: 64,
        width: 32,
        animatedHeight: 26,
        animatedWidth: 26,
      }
  }
}
