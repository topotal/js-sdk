import { useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { useTheme } from '../../theme'
import { Level } from '.'

interface Styles {
  wrapper: ViewStyle
  header: ViewStyle
  body: ViewStyle
  footer: ViewStyle
}

interface Props {
  level: Level
}

const getDynamicStyle = (level: Level) => {
  switch (level) {
    case 1:
      return {
        borderRadius: 8,
        headerHeight: 48,
        footerHeight: 48,
        padding: 24,
      }
    case 2:
      return {
        borderRadius: 4,
        headerHeight: 40,
        footerHeight: 40,
        padding: 16,
      }
  }
}

export const useStyles = ({
  level,
}: Props) => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => {
    const dynamicStyle = getDynamicStyle(level)

    return {
      wrapper: {
        borderRadius: dynamicStyle.borderRadius,
        borderWidth: 1,
        borderColor: color.borderLight,
        backgroundColor: color.surface,
        overflow: 'hidden',
      },
      header: {
        height: dynamicStyle.headerHeight,
        paddingHorizontal: dynamicStyle.padding,
        borderBottomWidth: 1,
        borderColor: color.borderLight,
        backgroundColor: color.background,
      },
      body: {
        padding: dynamicStyle.padding,
      },
      footer: {
        height: dynamicStyle.footerHeight,
        paddingHorizontal: dynamicStyle.padding,
        borderTopWidth: 1,
        borderColor: color.borderLight,
      },
    }
  }, [level, color.borderLight, color.surface, color.background])

  return {
    styles,
  }
}
