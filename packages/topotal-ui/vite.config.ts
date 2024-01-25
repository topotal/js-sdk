import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const commonConfig = {
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // ライブラリのエントリーポイント
      name: 'topotalUI',
      formats: ['umd', 'es', 'cjs'],
    },
    outDir: 'dist/esm', // ビルドしたファイルの出力先ディレクトリ
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
      'react-native': 'react-native-web',
    },
  },
}

// https://vitejs.dev/config/
// eslint-disable-next-line
export default defineConfig({
  ...commonConfig,
  build: {},
})
