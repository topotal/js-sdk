import { Pressable } from 'react-native'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '..'

describe('Button', () => {
  it('should be done to click a button', async () => {
    const mockOnPress = jest.fn()
    render(<Button title={'test-button'} onPress={mockOnPress} />)

    const button = screen.getByRole('button')
    await fireEvent.mouseDown(button)
    await fireEvent.mouseUp(button)
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
  it('normal button', async () => {
    const mockOnPress = jest.fn()
    render(<button type={'button'} onClick={mockOnPress}>click me</button>)

    await fireEvent.click(screen.getByRole('button'))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
  it('pressable', async () => {
    const mockOnPress = jest.fn()
    render(<Pressable role={'button'} onPressOut={mockOnPress}>hoge</Pressable>)

    const button = screen.getByText('hoge')
    await userEvent.click(button)
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
