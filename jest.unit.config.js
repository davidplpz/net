/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: "unit",
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  // coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  roots: ["<rootDir>/src"],
  testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: { "^.+\\.(ts)$": "ts-jest" },
};
