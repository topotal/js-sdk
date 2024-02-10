/// <reference types="vitest" />
// @vitest-environment node
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import reactNative from 'vitest-react-native'

// eslint-disable-next-line
export default defineConfig({
  plugins: [react(), reactNative()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@react-native-picker/picker': 'react-native-web',
      'react-native': 'react-native-web',
    },
  },
})
