const teste = (): void => console.log('1')

setTimeout(teste, 1000)

console.log('2')

// -------------------------

const loading = setInterval((): void => console.log('Loading...'), 500)

setTimeout((): void => {
  clearInterval(loading)
  console.log('Loaded')
}, 3000)

// ----------------------------

const message = (nome: string): string => 'Hello ' + nome

console.log(message('Felipe'))

const soma = (x: number, y: number): number => x + y
console.log(soma(1, 2))
