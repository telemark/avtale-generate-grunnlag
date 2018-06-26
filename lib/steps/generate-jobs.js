const uuid = require('uuid/v4')

module.exports = async data => {
  const types = ['elevpc', 'laeremidler', 'images']
  const jobs = data.reduce((prev, curr) => {
    types.forEach(type => {
      prev.push(Object.assign({}, {_id: uuid(), type: type, category: 'agreement'}, curr))
    })
    return prev
  }, [])
  return jobs
}
