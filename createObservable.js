const Enti = require('enti')

function createObservable (data, path, fn) {
  if (arguments.length === 2) {
    fn = path
    path = data
    data = false
  }

  const model = new Enti(data)

  model.on(path, fn)

  return model
}

module.exports = createObservable
