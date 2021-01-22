import { Token } from 'marked'
import { NormalizedToken } from './types'

export const normalizeTokens = (tokens: Token[]): NormalizedToken[] => {
  return tokens.filter((token, index) => {
    if (!('type' in token)) {
      return false
    }

    if (
      tokens.length === index + 1 &&
      token.type === 'space'
    ) {
      return false
    }

    return true
  }) as NormalizedToken[]
}

export const unescapeHTML = (escapedHtml: string) => {
  const withHeadSpace = !!escapedHtml.match(/^\s/)
  const doc = new DOMParser().parseFromString(escapedHtml, 'text/html')
  return `${withHeadSpace ? ' ' : ''}${doc.documentElement.textContent || ''}`
}
