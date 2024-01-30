import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// eslint-disable-next-line
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-native-picker/picker': 'react-native-web',
      'react-native': 'react-native-web',
    },
  },
})
