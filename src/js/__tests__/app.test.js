import Validator from '../Validator.js'

test('Username is correct', () => {
  const received = new Validator()
  const name = 'Ali00_black-55_baba'
  const message = received.validateUsername(name)
  expect(message).toEqual('Username is correct')
})

test('Start with digit', () => {
  const received = new Validator()
  const name = '0ali00_black-55_abdul'
  expect(() => {
    received.validateUsername(name)
  }).toThrow()
})

test('End with digit', () => {
  const received = new Validator()
  const name = 'Ali00_black-55_abdul0'
  expect(() => {
    received.validateUsername(name)
  }).toThrow()
})

test('Include three digits', () => {
  const received = new Validator()
  const name = 'Ali00_black-555_baba'
  expect(() => {
    received.validateUsername(name)
  }).toThrow()
})
