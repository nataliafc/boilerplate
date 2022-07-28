module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // pastas a serem ignoradas
  collectCoverage: true, //teste de cobertura de variáveis
  collectCoverageFrom: ["src/**/*.ts(x)"], // tudo da pasta src com final .ts(x)
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
};
