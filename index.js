const getNextFromQueue = require('./lib/steps/get-next-from-queue')
const filterData = require('./lib/steps/filter-data')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextFromQueue()
  .then(filterData)
  .then(data => {
    console.log(JSON.stringify(data, null, 2))
    logger('info', ['index', 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
