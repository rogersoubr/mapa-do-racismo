export default {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'json', 'node'],
  setupFiles: ['./test-utils/jest-setup.js'],
  setupFilesAfterEnv: ['./test-utils/test-setup.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/prisma/',
    '/test-utils/'
  ],
  testTimeout: 30000
};
