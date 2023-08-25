const parse = require('csv-parse')
const fs = require('fs')

let results = []

fs.createReadStream('kepler_data.csv')
  .on('data', data => results.push(data))
  .on('error', err => console.error(err))
  .on('end', () => console.log(results))
