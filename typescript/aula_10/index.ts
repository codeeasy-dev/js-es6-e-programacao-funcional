// MAP, FILTER & REDUCE

const nums: number[] = [1,4,6,5,7,7,8,9,10]

// MAP

const newNums_1: number[] = nums.map((num: number) => num * 2)
console.log(newNums_1)

// FILTER

const newNums_2: number[] = nums.filter((num: number) => num % 2 !== 0)
console.log(newNums_2)

// REDUCE

const sum: number = nums.reduce(
  (acumulador: number, num: number) => acumulador + num, 0
)
console.log(sum)
