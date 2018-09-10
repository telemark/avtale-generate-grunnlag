const logger = require('../logger')

module.exports = async data => {
  let ids = []
  let duplicates = 0
  let filtered = data.reduce((prev, current) => {
    if (!ids.includes(current.Personnr)) {
      ids.push(current.Personnr)
      prev.push(current)
    } else {
      duplicates++
    }
    return prev
  }, [])
  logger('info', ['filter-duplicates', 'duplicates', duplicates, 'uniques', ids.length, 'finished'])
  return filtered
}
