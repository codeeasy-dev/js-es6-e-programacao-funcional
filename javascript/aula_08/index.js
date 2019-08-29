usuario1 = {
  nome: 'Felipe',
  idade: 19,
}

usuario2 = new class {
  constructor() {
    this.nome = 'Felipe'
    this.idade = 19
  }
}

console.log(usuario1, typeof usuario1)
console.log(usuario2, typeof usuario2)
