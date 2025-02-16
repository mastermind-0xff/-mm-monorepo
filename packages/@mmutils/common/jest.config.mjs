export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/e2e/**/*.spec.ts', '<rootDir>/src/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules'],
};
