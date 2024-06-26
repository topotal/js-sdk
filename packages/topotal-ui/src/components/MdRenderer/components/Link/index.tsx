import React from 'react'
import { marked } from 'marked'
import { Text } from '../../../Text'
import { useStyles } from './styles'

interface Props {
  token: marked.Tokens.Link
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
      role="link"
      {...anchorAttributes}
    >
      {token.text}
    </Text>
  )
})
