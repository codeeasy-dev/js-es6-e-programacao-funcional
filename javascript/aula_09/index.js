// REST

function soma(...nums) {
  let resul = 0
  for (let index = 0; index < nums.length; index++) {
    resul += nums[index]
  }
  return resul
}

console.log(soma(1,4,6,9))

// SPREAD

const person = {
  nome: 'Felipe',
  idade: 19,
}

const person2 = {
  ...person,
  nome: 'Felipe Renan',
  sobrenome: 'Vieira',
}

console.log(person2)

const numeros = [1,5,4,8,9]
const numeros2 = [...numeros, 2, 3]
console.log(numeros2)
