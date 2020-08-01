const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-typescript'],
  webpackFinal: async config => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../src')
    config.resolve.alias['react-native'] = require.resolve('react-native-web')
    return config
  },
}