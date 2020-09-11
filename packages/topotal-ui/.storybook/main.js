module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.resolve.alias['react-native'] = require.resolve('react-native-web')
    return config
  },
}