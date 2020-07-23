const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias['~'] = path.resolve(__dirname, '../src')
    config.resolve.alias['react-native'] = require.resolve('react-native-web')
    return config
  },
}