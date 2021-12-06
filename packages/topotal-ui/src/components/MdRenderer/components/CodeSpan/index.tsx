import { StyleSheet } from 'react-native'
import { marked } from 'marked'
import { useTheme } from '../../../../'
import { Text } from '../../..'

interface Props {
  token: marked.Tokens.Codespan
}

const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 4,
      color: color.primary,
      backgroundColor: color.primaryLight,
      paddingVertical: 2,
      paddingHorizontal: 4,
      fontFamily: 'Consolas, Monaco, monospace',
    },
  })

  return {
    styles,
  }
}

export const CodeSpan = ({
  token,
}: Props): JSX.Element => {
  const { styles } = useStyles()

  return (
    <Text style={styles.wrapper}>
      {token.text}
    </Text>
  )
}
