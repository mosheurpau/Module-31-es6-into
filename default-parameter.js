function add(num1, num2 = 10) {
    // option 2
    // num2 = num2 || 0;
    // Option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;

}
const result = add(15);
console.log(result);

function fullName(frist, last = 'Chowdhury') {
    const name = frist + ' ' + last;
    return name;
}
console.log(fullName('Shakil'));