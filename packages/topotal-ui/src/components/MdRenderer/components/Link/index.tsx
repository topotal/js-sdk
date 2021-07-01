import React from 'react'
import { Tokens } from 'marked'
import { Text } from '../../../Text'
import { unescapeHTML } from '../../utils'
import { useStyles } from './styles'

interface Props {
  token: Tokens.Link
}

export const Link = React.memo<Props>(({
  token,
}) => {
  const { styles } = useStyles()

  const anchorAttributes = {
    href: token.href,
    hrefAttrs: {
      target: '_blank',
      rel: 'noopener',
    },
  }

  return (
    <Text
      style={styles.wrapper}
      accessibilityRole="link"
      {...anchorAttributes}
    >
      {unescapeHTML(token.text)}
    </Text>
  )
})
