// Pass function
const par = [1,2,3,4,5,6,7].filter(num => num % 2 === 0)
console.log(par)

const impar = [1,2,3,4,5,6,7].filter(num => num % 2 !== 0)
console.log(impar)

// Return a function
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}

const sum_2 = x => y => z => x + y + z

console.log(
  sum_2(10)(20)(5)
)
