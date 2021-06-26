import { useCallback, useState } from 'react'

interface Props<T> {
  value: T
  onChange?: (newValue: T) => void
}

export const useInputValue = <T>({
  value,
  onChange,
}: Props<T>) => {
  const [innerValue, setInnerValue] = useState<T>(value)

  const handleChange = useCallback((newValue: T) => {
    setInnerValue(newValue)
    onChange && onChange(newValue)
  }, [onChange])

  return {
    innerValue,
    handleChange,
  }
}
