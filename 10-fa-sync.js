
const {readFileSync,writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')


console.log(first,second);

writeFileSync("./content/first.txt", "Hello World")
writeFileSync("./content/second.txt", "Hello World")


console.log('done with this task');
console.log('Starting next one');

