// Pass function
const par = [1,2,3,4,5,6,7].filter(num => num % 2 === 0)
console.log(par)

const impar = [1,2,3,4,5,6,7].filter(num => num % 2 !== 0)
console.log(impar)

// Return a function
function sum(x: number) {
  return function (y: number) {
    return function (z: number) {
      return x + y + z
    }
  }
}

const sum_2 = (x: number) => (y: number) => (z: number) => x + y + z

console.log(sum(10)(20)(5))
