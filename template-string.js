const priya = 'Asif Akbor';
const meye = 'Meye tumi ki dukho chino';
const kobita = `Kobita tumi sopno charini`;
const multiline = 'This is my first line \n' + 'this is my second line \n' + 'this is third line';
// console.log(multiline);
const multilineNew = `This is my first line
this is my second line
this is third line
this is forth line
`;
// console.log(multilineNew);
const friends = ['fdg', 'erdg', 'ffge', 'ffrtr'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const frist = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is: ' + frist + ' ' + last;
const fullNew = `This person name is: ${frist} ${last}. has mony ${friends.length * 500}. He live in Dhaka.`;
console.log(fullNew);