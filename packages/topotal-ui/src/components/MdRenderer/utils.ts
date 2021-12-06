import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { NormalizedToken } from './types'

export const normalizeTokens = (tokens: marked.Token[]): NormalizedToken[] => {
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
  return sanitizeHtml(escapedHtml) || ''
}
