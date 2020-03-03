const Enti = require('enti')

function helperError () {
  throw new Error(`you ran 'mutate' directly. you probably ment to run 'mutate.set|remove|push|update|move'`)
}

const mutate = Object.assign(helperError, {
  get: Enti.get,
  set: Enti.set,
  remove: Enti.remove,
  push: Enti.push,
  update: Enti.update,
  move: Enti.move,
})

module.exports = mutate
