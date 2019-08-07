setTimeout(function() {
  console.log('1')
}, 1000)

console.log('2')

// -------------------------

const loading = setInterval(function() {
  console.log('Loading...')
}, 500)

setTimeout(function () {
  clearInterval(loading)
  console.log('Loaded')
}, 3000)
