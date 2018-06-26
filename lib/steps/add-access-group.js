const info = require('tfk-schools-info')

module.exports = async data => {
  const enriched = data.map(student => {
    const schools = info({schoolId: student.schoolId})
    return Object.assign({}, student, {accessGroup: schools[0].accessGroup})
  })
  return enriched
}
