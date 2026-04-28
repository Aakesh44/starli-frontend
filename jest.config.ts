// jest.config.ts
import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Note the .ts extension
    testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)