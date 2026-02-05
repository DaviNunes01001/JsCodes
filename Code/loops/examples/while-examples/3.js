/**
 * @file 3.js
 * @description Mostra números pares ou ímpares até um valor informado pelo usuário.
 */
let num = parseInt(prompt("Escolha o seu número: "));
let contador = 0;

if (num % 2 === 0) {
  console.log("Números pares:");
  alert("Pares: ");
  while (contador <= num) {
    if (contador % 2 === 0) {
      console.log(contador);
      alert(contador);
    }
    contador++;
  }
}

if (num % 2 !== 0){
    contador = 0;
    console.log("\nNúmeros ímpares:");
    alert("Impares: ")
    while (contador <= num) {
        if (contador % 2 !== 0) {
            console.log(contador);
            alert(contador)
        }
        contador++;
    }
}