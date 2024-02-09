const config = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '../../'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1',
  },
  resolver: undefined,
  globals: {
    tsconfig: './tsconfig.jest.json',
  },
}

// eslint-disable-next-line
export default config
