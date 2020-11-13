module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias['react-native'] = require.resolve('react-native-web')
    return config
  },
}