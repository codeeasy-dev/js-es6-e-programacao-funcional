// REST

function soma(...nums: number[]) {
  let resul = 0
  for (let index = 0; index < nums.length; index++) {
    resul += nums[index]
  }
  return resul
}

console.log(soma(1,4,6,9))

// SPREAD

interface IPerson {
  nome: string,
  idade: number,
}

const person: IPerson = {
  nome: 'Felipe',
  idade: 19,
}

const person2: {
  nome: string,
  sobrenome: string,
  idade: number,
} = {
  ...person,
  nome: 'Felipe Renan',
  sobrenome: 'Vieira',
}

console.log(person2)

const numeros: number[] = [1,5,4,8,9]
const numeros2: number[] = [...numeros, 2, 3]
console.log(numeros2)

