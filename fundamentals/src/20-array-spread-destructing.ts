const numbers = [1,2,3]

const moreNumbers= [...numbers, 4, 5, 6]

console.log(moreNumbers)


const [first, second, ...rest] = moreNumbers


console.log(first, second, rest)