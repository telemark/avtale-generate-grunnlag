module.exports = async data => {
  const ins = data.split('$IN')
  const reduced = ins.reduce((prev, current) => {
    const separated = current.split(';')
    prev.push({
      schoolId: parseInt(separated[1], 10).toString(),
      program: separated[2],
      personalId: separated[3]
    })
    return prev
  }, [])
  return reduced
}
