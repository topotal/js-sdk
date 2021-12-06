import { marked } from 'marked'

export type NormalizedToken =
  | marked.Tokens.Space
  | marked.Tokens.Code
  | marked.Tokens.Heading
  | marked.Tokens.Table
  | marked.Tokens.Hr
  | marked.Tokens.Blockquote
  | marked.Tokens.List
  | marked.Tokens.ListItem
  | marked.Tokens.Paragraph
  | marked.Tokens.HTML
  | marked.Tokens.Text
  // | marked.Tokens.Def
  | marked.Tokens.Escape
  | marked.Tokens.Tag
  | marked.Tokens.Image
  | marked.Tokens.Link
  | marked.Tokens.Strong
  | marked.Tokens.Em
  | marked.Tokens.Codespan
  | marked.Tokens.Br
  | marked.Tokens.Del
