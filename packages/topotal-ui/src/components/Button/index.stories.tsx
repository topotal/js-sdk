import { VStack } from '../'
import { Button } from './'

export default { title: 'components/Button' }

export const all = () => (
  <VStack gap={8} align="flex-start">
    <Button label="Save" color="basic" size="small" />
    <Button label="Save" color="basic" size="medium" />
    <Button label="Save" color="basic" size="small" variant="outline" />
    <Button label="Save" color="basic" size="medium" variant="outline" />
    <Button label="Save" color="basic" size="small" variant="text" />
    <Button label="Save" color="basic" size="medium" variant="text" />
    <Button label="Post" size="small" />
    <Button label="Post" size="small" disabled />
    <Button label="Post" size="medium" />
    <Button label="Post" size="large" />
    <Button label="Post" size="small" variant="outline" />
    <Button label="Post" size="medium" variant="outline" />
    <Button label="Post" size="small" variant="text" />
    <Button label="Post" size="medium" variant="text" />
    <Button label="Save" color="success" size="small" />
    <Button label="Save" color="success" size="medium" />
    <Button label="Save" color="success" size="small" variant="outline" />
    <Button label="Save" color="success" size="medium" variant="outline" />
    <Button label="Save" color="success" size="small" variant="text" />
    <Button label="Save" color="success" size="medium" variant="text" />
    <Button label="Delete" color="error" size="small" />
    <Button label="Delete" color="error" size="medium" />
    <Button label="Delete" color="error" size="small" variant="outline" />
    <Button label="Delete" color="error" size="medium" variant="outline" />
    <Button label="Delete" color="error" size="small" variant="text" />
    <Button label="Delete" color="error" size="medium" variant="text" />
    <Button label="Cancel" color="cancel" size="small" />
    <Button label="Cancel" color="cancel" size="medium" />
    <Button
      label="Cancel"
      color="cancel"
      size="small"
      variant="outline"
    />
    <Button
      label="Cancel"
      color="cancel"
      size="medium"
      variant="outline"
    />
    <Button label="Cancel" color="cancel" size="small" variant="text" />
    <Button
      label="Cancel"
      color="cancel"
      size="medium"
      variant="text"
    />
    <Button label="送信" size="small" loading={true} />
    <Button label="送信" size="medium" loading={true} />
    <Button label="送信" size="large" loading={true} />
    <Button
      label="送信"
      startIconName="done"
    />
    <Button
      label="送信"
      endIconName="done"
    />
    <Button
      label="送信"
      size="medium"
      startIconName="done"
    />
    <Button
      label="送信"
      size="medium"
      endIconName="done"
    />
    <Button
      label="送信"
      size="small"
      startIconName="done"
    />
    <Button
      label="送信"
      size="small"
      endIconName="done"
    />
    <Button label="" size="small" endIconName="done" />
    <Button label="" size="medium" endIconName="done" />
    <Button label="" size="large" endIconName="done" />
  </VStack>
)
