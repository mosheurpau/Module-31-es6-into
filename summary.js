let priyoPerson = 'Mosheur';
priyoPerson = 'Mehedi';
const bou = 'jan pakhi';

// default parameter 
function getName(frist, last = 'Rahman') {
    return frist + ' ' + last;
}

//  template string 
const myPepole = `My lovely person is ${getName('Meem')} and his fullName is ${priyoPerson}.
ami ekhn ki korbo bujhtasi nah.`
console.log(myPepole);

// arrow function
const getName2 = (frist, last) => frist + ' ' + last;
const fiveTime = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const sum = x + y + z;
    const result = sum * x;
    return result;
}
