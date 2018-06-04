const { defaults } = require('jest-config');
module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    // Coverage generating options
    "collectCoverage": process.env.coverage,
    "coverageDirectory": "./coverage/",
    "collectCoverageFrom": [
        "**/*.{ts,tsx}",
        "!**/node_modules/**"
    ],
    "coveragePathIgnorePatterns": ["<rootDir>/dist/", "<rootDir>/node_modules/"],

    "globals": {
        "__DEV__": true
    },
    // This option should be used for configuring minimum threshold for test coverage
    // "coverageThreshold": {
    //     "global": {
    //         "branches": 80,
    //         "functions": 80,
    //         "lines": 80,
    //         "statements": -10
    //     }
    // },

    // Setup Enzyme
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupTestFrameworkScriptFile": "<rootDir>/setupEnzyme.ts"
}