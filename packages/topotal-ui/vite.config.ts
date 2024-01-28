import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export const buildSettings = {
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // ライブラリのエントリーポイント
      name: 'topotalUI',
    },
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@react-native-picker/picker': 'react-native-web',
      'react-native': 'react-native-web',
    },
  },
}


// https://vitejs.dev/config/
// eslint-disable-next-line
export default defineConfig({
  plugins: buildSettings.plugins,
  resolve: buildSettings.resolve,
})
