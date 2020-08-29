import React, { useState } from 'react'
import { View } from 'react-native'
import Text from '../Text'
import Button from '../Button'
import RightSideModal from '.'

export default { title: 'components/RightSideModal' }

export const All = () => {
  const [visible, setVisible] = useState(false)

  const handlePressShow = () => {
    setVisible(true)
  }

  const handlePressHide = () => {
    setVisible(false)
  }

  return (
    <View>
      <RightSideModal
        title="Sample Title"
        visible={visible}
        footer={(
          <>
            <Button
              title="Hide"
              size="small"
              onPress={handlePressHide}
            />
          </>
        )}
      >
        <Text>test child</Text>
        <Text>test child</Text>
      </RightSideModal>
      <Button
        title="Show modal"
        color="secondary"
        onPress={handlePressShow}
      />
    </View>
  )
}
