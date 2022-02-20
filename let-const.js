let balance = 1240;
balance = 1340;
const userName = 'janpakhi postas poatas';
const weTogaether = 'ami ' + userName;
console.log(weTogaether);
// userName = 'moyna pakhi';

const numbers = [54, 32, 54, 65, 76];
// numbers = [45, 65, 78, 54, 76, 87]; not allowed

numbers.push(555);
numbers[1] = 343;

let sum = 0;
for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}