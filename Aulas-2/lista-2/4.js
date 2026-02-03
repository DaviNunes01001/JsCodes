const lista = [10, 20, 30];
const copia = [...lista];
copia.push(40);
console.log(lista) //array original nao muda
console.log(copia) // array com spreed modificado
