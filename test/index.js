const test = require('tape')

const createObservable = require('../createObservable')
const mutate = require('../mutate')

test('mutate - error is called at root', t => {
  t.plan(1)

  try {
    mutate('what am i doing?')
  } catch (error) {
    t.equal(error.message, `you ran \'mutate\' directly. you probably ment to run \'mutate.set|remove|push|update|move\'`)
  }
})

test('mutate - emit on mutate', t => {
  t.plan(1)

  const data = {
    test: 'inital'
  }

  const observable = createObservable('test', test => {
    t.equal(test, 'new')
  }).attach(data)

  mutate.set(data, 'test', 'new')
})
