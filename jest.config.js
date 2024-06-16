export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/tests/**/*.test.js', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'node',
  watch: false,
};
