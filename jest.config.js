module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    "^.+\\.js$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/setupJest.js"],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1',
    "testing/(.*)": "<rootDir>/app/tests/$1"
  },
  transformIgnorePatterns: [
    "node_modules/(?!@angular)"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: "<rootDir>/tsconfig.spec.json",
      babelConfig: true,
      diagnostics: {
        warnOnly: true
      }
    },
    stringifyContentPathRegex: "\\.html$"
  }
};