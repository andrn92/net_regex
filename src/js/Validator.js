export default class Validator {

  validateUsername(name) {
    let nameCorrect = true
    let reg1 = /^[^\d-_\s]([\w-]*)[^\d-_\s]$/i
    let reg2 = /\d{3}/g
    let res1 = name.match(reg1)
    if (res1) {
      let res2 = res1[1].match(reg2)
      if (res2) {
        nameCorrect = false
      }
    } else {
      nameCorrect = false
    }
    if (!nameCorrect) {
      throw new Error('Incorrect symbols in the name')
    }
    return 'Username is correct'
  }
}
