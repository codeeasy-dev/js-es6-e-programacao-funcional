const teste = () => console.log('1')

setTimeout(teste, 1000)

console.log('2')

// -------------------------

const loading = setInterval(() => console.log('Loading...'), 500)

setTimeout(() => {
  clearInterval(loading)
  console.log('Loaded')
}, 3000)

// ----------------------------

const message = nome => 'Hello ' + nome

console.log(message('Felipe'))

const soma = (x, y) => x + y

console.log(soma(1, 2))
console.log(soma(6, 34))
