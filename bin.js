#!/usr/bin/env node

let ciJobNumber = require('ci-job-number')

if (ciJobNumber() !== 1) {
  process.argv = process.argv.filter(i => i !== '--coverage')
}

require('jest-cli/bin/jest')
