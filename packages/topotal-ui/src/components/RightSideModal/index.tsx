import React from 'react'
import { Modal } from 'react-native'
import VStack from '../VStack'
import HStack from '../HStack'
import Spacer from '../Spacer'
import Text from '../Text'
import { useStyles } from './styles'

type Props = {
  title?: string
  visible?: boolean
  header?: React.ReactNode
  footer?: React.ReactNode
}

const RightSideModal: React.FC<Props> = ({
  title,
  visible = false,
  header,
  footer,
  children,
}) => {
  const { styles } = useStyles()

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <VStack style={styles.overlay}>
        <VStack style={styles.container} gap={24}>
          {title ? (
            <HStack>
              <Text type="display2">{title}</Text>
              <Spacer />
              {header}
            </HStack>
          ) : null}
          <VStack gap={16}>
            {children}
          </VStack>
          {footer ? (
            <HStack gap={8}>
              {footer}
            </HStack>
          ) : null}
        </VStack>
      </VStack>
    </Modal>
  )
}

export default RightSideModal
