export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testPathIgnorePatterns: ["/node_modules"],
  moduleFileExtensions: ["ts", "js"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: "node",
};
