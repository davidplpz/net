/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: "e2e",
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  // coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__test__/**/*.[jt]s?(x)",
    "**/?(*.)+(e2e-spec|e2e-test).[tj]s?(x)",
  ],
  transform: { "^.+\\.(ts)$": "ts-jest" },
};
