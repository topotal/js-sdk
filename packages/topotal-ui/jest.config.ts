import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '../../node_modules'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
    '^@testing-library/jest-dom/extend-expect$': '<rootDir>/../../node_modules/@testing-library/jest-dom/extend-expect.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  resolver: undefined,
  globals: {
    tsconfig: './tsconfig.jest.json',
  },
}

// eslint-disable-next-line
export default config
