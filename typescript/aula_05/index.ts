setTimeout(function(): void {
  console.log('1')
}, 1000)

console.log('2')

// -------------------------

const loading = setInterval(function(): void {
  console.log('Loading...')
}, 500)

setTimeout(function (): void {
  clearInterval(loading)
  console.log('Loaded')
}, 3000)
