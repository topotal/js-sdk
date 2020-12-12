import React from 'react'
import Button from './'

export default { title: 'components/Button' }

export const all = () => (
  <>
    <Button title="Post" size="small" />
    <Button title="Post" size="small" disabled />
    <Button title="Post" size="medium" />
    <Button title="Post" size="large" />
    <Button title="Post" size="small" variant="outline" />
    <Button title="Post" size="medium" variant="outline" />
    <Button title="Post" size="small" variant="text" />
    <Button title="Post" size="medium" variant="text" />
    <Button title="Save" color="positive" size="small" />
    <Button title="Save" color="positive" size="medium" />
    <Button title="Save" color="positive" size="small" variant="outline" />
    <Button title="Save" color="positive" size="medium" variant="outline" />
    <Button title="Save" color="positive" size="small" variant="text" />
    <Button title="Save" color="positive" size="medium" variant="text" />
    <Button title="Delete" color="negative" size="small" />
    <Button title="Delete" color="negative" size="medium" />
    <Button title="Delete" color="negative" size="small" variant="outline" />
    <Button title="Delete" color="negative" size="medium" variant="outline" />
    <Button title="Delete" color="negative" size="small" variant="text" />
    <Button title="Delete" color="negative" size="medium" variant="text" />
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
    <Button title="送信" size="small" loading={true} />
  </>
)
