import { composeStories } from '@storybook/react'
import { getByPlaceholderText, getByText, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as stories from '../index.stories'

describe('SelectTagInput', () => {
  const { Default, SuggestSelected } = composeStories(stories)

  it('should be displayed default palceholder when first display', () => {
    const { container } = render(<Default />)
    // 初期表示時にはデフォルトのプレースホルダーが表示されるべきである
    expect(getByPlaceholderText(container, 'Insert new item...')).toBeInTheDocument()
  })
  it('should be displayed piyo when select the suggested "piyo"', () => {
    const { container } = render(<SuggestSelected />)
    // サジェスト選択時には選択したものが表示されるべきである
    expect(getByText(container, 'piyo')).toBeInTheDocument()
    // プレースホルダーは見えない状態になっていること
    expect(getByPlaceholderText(container, 'Insert new item...')).not.toBeInTheDocument()
  })
})
