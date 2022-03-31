/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  testRegex: "(/src/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};
