const numbers = [43, 56, 75, 54, 76, 78, 56,];
// console.log(numbers);
console.log(...numbers);

const max = Math.max(23, 34, 87, 9, 34, 65,);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const numbers2 = [22, 25, ...numbers, 99];
console.log(numbers);
console.log(numbers2);