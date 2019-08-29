// Função impura
const x = 10
const impureSum = y => x + y

let z = 10
const impureSumInZ = y => z += y

console.log(impureSumInZ(4))
console.log(impureSumInZ(5))

// Função pura
const pureSum = (x, y) => x + y

console.log(pureSum(5, 7))
console.log(pureSum(5, 10))
