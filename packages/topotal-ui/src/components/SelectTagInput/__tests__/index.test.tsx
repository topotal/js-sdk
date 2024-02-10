// @vitest-environment node
import { composeStories } from '@storybook/testing-react'
import { getByPlaceholderText, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import * as stories from '../index.stories'

const { Default, SelectTag } = composeStories(stories)

describe('test', () => {
  it('shold be true', () => {
    console.log('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest')
    const { container } = render(<Default />)
    expect(getByPlaceholderText(container, 'Insert new item...'))
  })
})
