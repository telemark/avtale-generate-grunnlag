const getNextFromQueue = require('./lib/steps/get-next-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextFromQueue()
  .then(data => {
    logger('info', ['index', data, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
