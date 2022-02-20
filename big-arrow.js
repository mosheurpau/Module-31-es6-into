const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(5, 2, 8);
console.log(result);

const tenTime = (num) => num * 10;
const output = tenTime(5);
console.log(output);

const fiveTime = num => num * 5;
const value = fiveTime(5);
console.log(value);

const getName = () => 'Mosheur Rahman';
const name = getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const total = doMath(5, 3);
console.log(total);
