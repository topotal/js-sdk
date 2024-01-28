import { defineConfig } from 'vite'
import { buildSettings } from './vite.config'


// https://vitejs.dev/config/
// eslint-disable-next-line
export default defineConfig({
  plugins: buildSettings.plugins,
  build: { ...buildSettings.build,
    lib: {
      ...buildSettings.build.lib,
      formats: ['es'],
    },
    outDir: './dist/esm',
  },
  resolve: buildSettings.resolve,
})

