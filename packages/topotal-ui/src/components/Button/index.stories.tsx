import { useAsyncFn } from 'react-use'
import { VStack } from '../'
import { Button } from './'

export default { title: 'components/Button' }

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Test = () => {
  const [{ loading }, submit] = useAsyncFn(async () => {
    console.info('hoge')
    await sleep(1000)
  }, [])

  return (
    <Button
      title="テスト"
      loading={loading}
      onPress={submit}
    />
  )
}

export const All = () => (
  <VStack gap={8} align="flex-start">
    <Button title="Save" color="basic" size="small" />
    <Button title="Save" color="basic" size="medium" />
    <Button title="Save" color="basic" size="small" variant="outline" />
    <Button title="Save" color="basic" size="medium" variant="outline" />
    <Button title="Save" color="basic" size="small" variant="text" />
    <Button title="Save" color="basic" size="medium" variant="text" />
    <Button title="Post" size="small" />
    <Button title="Post" size="small" disabled />
    <Button title="Post" size="medium" />
    <Button title="Post" size="large" />
    <Button title="Post" size="small" variant="outline" />
    <Button title="Post" size="medium" variant="outline" />
    <Button title="Post" size="small" variant="text" />
    <Button title="Post" size="medium" variant="text" />
    <Button title="Save" color="success" size="small" />
    <Button title="Save" color="success" size="medium" />
    <Button title="Save" color="success" size="small" variant="outline" />
    <Button title="Save" color="success" size="medium" variant="outline" />
    <Button title="Save" color="success" size="small" variant="text" />
    <Button title="Save" color="success" size="medium" variant="text" />
    <Button title="Delete" color="error" size="small" />
    <Button title="Delete" color="error" size="medium" />
    <Button title="Delete" color="error" size="small" variant="outline" />
    <Button title="Delete" color="error" size="medium" variant="outline" />
    <Button title="Delete" color="error" size="small" variant="text" />
    <Button title="Delete" color="error" size="medium" variant="text" />
    <Button title="Cancel" color="cancel" size="small" />
    <Button title="Cancel" color="cancel" size="medium" />
    <Button
      title="Cancel"
      color="cancel"
      size="small"
      variant="outline"
    />
    <Button
      title="Cancel"
      color="cancel"
      size="medium"
      variant="outline"
    />
    <Button title="Cancel" color="cancel" size="small" variant="text" />
    <Button
      title="Cancel"
      color="cancel"
      size="medium"
      variant="text"
    />
    <Button title="Warning" color="warning" size="small" />
    <Button title="Warning" color="warning" size="medium" />
    <Button title="Warning" color="warning" size="small" variant="outline" />
    <Button title="Warning" color="warning" size="medium" variant="outline" />
    <Button title="Warning" color="warning" size="small" variant="text" />
    <Button title="Warning" color="warning" size="medium" variant="text" />
    <Button title="送信" size="small" loading={true} />
    <Button title="送信" size="medium" loading={true} />
    <Button title="送信" size="large" loading={true} />
    <Button
      title="送信"
      startIconName="done"
    />
    <Button
      title="送信"
      endIconName="done"
    />
    <Button
      title="送信"
      size="medium"
      startIconName="done"
    />
    <Button
      title="送信"
      size="medium"
      endIconName="done"
    />
    <Button
      title="送信"
      size="small"
      startIconName="done"
    />
    <Button
      title="送信"
      size="small"
      endIconName="done"
    />
    <Button title="" size="small" endIconName="done" />
    <Button title="" size="medium" endIconName="done" />
    <Button title="" size="large" endIconName="done" />
    <Button title="InnerOutline" innerOutline variant="outline" />
    <VStack gap={8} style={{ width: 120 }} >
      <Button title="InnerOutline" size="medium" innerOutline variant="outline" />
      <Button startIconName="done" title="InnerOutline" size="medium" innerOutline variant="outline" />
      <Button endIconName="done" title="InnerOutline" size="medium" innerOutline variant="outline" />
    </VStack>
    <Button title="AI" color="ai" size="small" endIconName="done" />
    <Button title="AI Medium" color="ai" size="medium" endIconName="done" />
    <Button title="AI Large" color="ai" size="large" endIconName="done" />
    <Button title="AI Outline" color="ai" variant="outline" />
  </VStack>)
