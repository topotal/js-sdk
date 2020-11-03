import React from 'react'
import Button from './'

export default { title: 'components/Button' }

export const all = () => (
  <>
    <Button title="送信" size="small" />
    <Button title="送信" size="small" disabled />
    <Button title="送信" size="medium" />
    <Button title="送信" size="large" />
    <Button title="送信" size="small" variant="outline" />
    <Button title="送信" size="medium" variant="outline" />
    <Button title="送信" size="small" variant="text" />
    <Button title="送信" size="medium" variant="text" />
    <Button title="削除" color="negative" size="small" />
    <Button title="削除" color="negative" size="medium" />
    <Button title="削除" color="negative" size="small" variant="outline" />
    <Button title="削除" color="negative" size="medium" variant="outline" />
    <Button title="削除" color="negative" size="small" variant="text" />
    <Button title="削除" color="negative" size="medium" variant="text" />
    <Button title="キャンセル" color="cancel" size="small" />
    <Button title="キャンセル" color="cancel" size="medium" />
    <Button
      title="キャンセル"
      color="cancel"
      size="small"
      variant="outline"
    />
    <Button
      title="キャンセル"
      color="cancel"
      size="medium"
      variant="outline"
    />
    <Button title="キャンセル" color="cancel" size="small" variant="text" />
    <Button
      title="キャンセル"
      color="cancel"
      size="medium"
      variant="text"
    />
    <Button title="送信" size="small" loading={true} />
  </>
)
