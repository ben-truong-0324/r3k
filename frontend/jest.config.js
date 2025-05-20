module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
  };
  