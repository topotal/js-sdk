import { useRef, useState } from 'react'
import { NativeSyntheticEvent, Text, TextInput, TextInputKeyPressEventData, View } from 'react-native'
import { TextArea, TextAreaCompletionItem } from '.'

export default {
  title: 'components/TextArea',
}

export const Default = () => (
  <TextArea
    placeholder={'textarea\ntextarea'}
  />
)

export const Disabled = () => (
  <TextArea
    value={'textarea\ntextarea'}
    disabled
  />
)

const completionItems: TextAreaCompletionItem[] = [
  {
    label: '@hoge',
    value: '@hoge',
  },
  {
    label: '@fuga',
    value: '@fuga',
  },
]

export const Completion = () => {
  const [showCompletion, setShowCompletion] = useState(false)
  const ref = useRef<TextInput | null>(null)
  const [value, setValue] = useState('')

  return (
    <TextArea
      ref={ref}
      value={value}
      completionView={showCompletion ? (
        <View>
          {completionItems.map((item) => (
            <Text key={item.value}>
              {item.label}
            </Text>
          ))}
        </View>
      ) : null}
      onChange={(event) => {
        const text = event.nativeEvent.text as string
        const { selectionStart } = event.target as any
        const lastChar = text.slice(0, selectionStart)
        if (lastChar.match(/ @[\w!-~]*$/)) {
          setShowCompletion(true)
        } else {
          setShowCompletion(false)
        }
        setValue(text)
      }}
      onKeyPress={(event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (event.nativeEvent.key === 'Enter') {
          event.preventDefault()
          setValue(value + 'hoge')
          setTimeout(() => {
            console.info((event.target as unknown as HTMLInputElement).setSelectionRange(0, 0))
          }, 0)
        }
      }}
    />
  )
}
