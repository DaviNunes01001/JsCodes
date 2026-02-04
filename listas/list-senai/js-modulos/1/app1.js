const info = require('./1.js');

const matheus = 2008;
const lucas = 2009;
const idadeMatheus = info(matheus);
const idadeLucas = info(lucas);

console.log(`Matheus nasceu em ${matheus} e tem ${idadeMatheus} anos.`);
console.log(`Lucas nasceu em ${lucas} e tem ${idadeLucas} anos.`);
