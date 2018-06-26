const saveFile = require('../save-file')
const { JOBS_DIRECTORY_PATH } = require('../../config')
module.exports = async data => {
  const jobs = data.map(student => saveFile({filePath: `${JOBS_DIRECTORY_PATH}/${student._id}.json`, data: student}))
  await Promise.all(jobs)
  return data
}
