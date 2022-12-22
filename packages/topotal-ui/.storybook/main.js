module.exports = {
  staticDirs: [
    '../assets',
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ],
  webpackFinal: async config => {
    config.resolve.alias['@react-native-picker/picker'] = require.resolve('react-native-web')
    config.resolve.alias['react-native'] = require.resolve('react-native-web')
    return config
  },
}
