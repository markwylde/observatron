# observatron

## Example Usage

```javascript
const createObservable = require('observatron/createObservable')
const mutate = require('observatron/mutate')

const data = {
  color: 'blue',
  user: {
    name: 'mark',
    perms: [1,2,3,4,5]
  }
}

// Create an observer
const observable = createObservable('user.name', userName => console.log(userName))

  // Attach to the observable
  observable.attach(data)

  // Detacth data from observable
  observable.detach()

  // Get attached data
  observable.getAttachedData()

// Create individual observers
createObservable('user.name', userName => console.log(userName))
  .attach(data)

createObservable('color', color => console.log(color))
  .attach(data)

// Watch one level deep
createObservable('user|*', user => console.log('something in the user has changed', user))
  .attach(data)

// Watch whole object recursively
createObservable('user|**', user => console.log('something in the user has changed', user))
  .attach(data)

// Group observers on logical data set
createObservable({
  'user.name': userName => console.log(userName),
  'color': color => console.log(color)
}).attach(data)

// Change the state so the above are called
setTimeout(function () {
  mutate(data, 'user.name', 'bob ' + Date.now())

  if (data.color === 'blue') {
    mutate(data, 'color', 'pink')
  } else {
    mutate(data, 'color', 'blue')
  }
}, 1000)
```