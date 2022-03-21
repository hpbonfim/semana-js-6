import type { Config } from '@jest/types'
// https://stackoverflow.com/questions/70646380/why-cant-jest-find-my-typescript-modules
const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: [
    "node_modules"
  ]
}

export default {
  projects: [{
    ...config,
    preset: "ts-jest/presets/default-esm",
    testEnvironment: 'jest-environment-node',
    resolver: "<rootDir>/jest.resolver.cjs",
    displayName: "backend",
    extensionsToTreatAsEsm: ['.ts'],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.ts$': '$1',
    },
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    collectCoverageFrom: [
      "server/",
      "!server/index.ts",
    ],
    transformIgnorePatterns: [
      "node_modules",
      "public"
    ],
    testMatch: [
      "**/tests/**/server/**/*.test.ts"
    ]
  },
  {
    ...config,
    testEnvironment: "jsdom",
    displayName: "frontend",
    collectCoverageFrom: [
      "public/",
    ],
    transformIgnorePatterns: [
      "node_modules",
      "server"
    ],
    testMatch: [
      "**/tests/**/public/**/*.test.js"
    ]
  },
  ]
}