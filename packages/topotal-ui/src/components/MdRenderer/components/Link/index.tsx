import React from 'react'
import { Tokens } from 'marked'
import Text from '../../../Text'
import { unescapeHTML } from '../../utils'
import { useStyles } from './styles'

type Props = {
  token: Tokens.Link
}

const Link: React.FC<Props> = ({
  token,
}) => {
  const { styles } = useStyles()

  const anchorAttributes = {
    href: token.href,
    target: '_blank',
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
}

export default React.memo(Link)
