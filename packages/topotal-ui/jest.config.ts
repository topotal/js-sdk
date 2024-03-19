import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    'react-native$': 'react-native-web',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '@testing-library/react-native/extend-expect'],
  resolver: undefined,
  globals: {
    tsconfig: './tsconfig.jest.json',
    __DEV__: true,
  },
}

// eslint-disable-next-line
export default config
