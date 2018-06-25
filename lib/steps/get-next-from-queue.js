const fs = require('fs').promises
const { QUEUE_DIRECTORY_PATH } = require('../../config')
const logger = require('../logger')
const isJob = file => file.includes('.job.')

module.exports = async () => {
  const files = await fs.readdir(QUEUE_DIRECTORY_PATH)
  console.log(files)
  const file = files.filter(isJob)[0]
  if (file) {
    const fileName = `${QUEUE_DIRECTORY_PATH}/${file}`
    const data = await fs.readFile(fileName, 'utf8')
    return data
  } else {
    logger('info', ['get-next-from-queue', 'no jobs found'])
    process.exit(0)
  }
}
