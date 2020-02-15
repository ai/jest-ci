#!/usr/bin/env node

let ciJobNumber = require('ci-job-number')

if (ciJobNumber() !== 1) {
  process.exit()
}
