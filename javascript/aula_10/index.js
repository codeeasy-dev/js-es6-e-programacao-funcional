// MAP, FILTER & REDUCE

const nums = [1,4,6,5,7,7,8,9,10]

// MAP

const newNums_1 = nums.map(num => num * 2)
console.log(newNums_1)

// FILTER

const newNums_2 = nums.filter(num => num % 2 !== 0)
console.log(newNums_2)

// REDUCE

const sum = nums.reduce((acumulador, num) => acumulador + num, '')
console.log(sum)
