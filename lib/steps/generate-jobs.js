const uuid = require('uuid/v4')

module.exports = async data => {
  const types = ['elevpc', 'laeremidler']
  const jobs = data.reduce((prev, curr) => {
    types.forEach(type => {
      prev.push(Object.assign({}, { _id: uuid(), type: type, category: 'agreement', personalId: curr.Personid, organization: curr.Orgnr }, curr))
    })
    return prev
  }, [])
  return jobs
}
