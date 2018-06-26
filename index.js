const getNextFromQueue = require('./lib/steps/get-next-from-queue')
const filterData = require('./lib/steps/filter-data')
const addAccessGroup = require('./lib/steps/add-access-group')
const generateJobs = require('./lib/steps/generate-jobs')
const saveJobs = require('./lib/steps/save-jobs')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextFromQueue()
  .then(filterData)
  .then(addAccessGroup)
  .then(generateJobs)
  .then(saveJobs)
  .then(data => {
    logger('info', ['index', 'jobs', data.length, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
