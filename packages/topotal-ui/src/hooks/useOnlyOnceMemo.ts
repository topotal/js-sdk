import { useMemo } from 'react'

export const useOnlyOnceMemo = <T>(factory: () => T): T => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, [])
}
