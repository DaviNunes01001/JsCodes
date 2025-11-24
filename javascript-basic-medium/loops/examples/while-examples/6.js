/**
 * @file 6.js
 * @description Exibe os números múltiplos de 3 entre 1 e 50.
 */
//Numeros multiplos de 3 entre 1 e 50

//Inicia a variavel numero em 1
let numero = 1;

while (numero <= 50){ //Condição
    if (numero % 3 === 0){ //Se o número que for dividido por 3 tiver seu resto 0, então ele é divisível por 3;
        console.log(numero); // Mostra o Número
    }
    numero ++ //Lop pra ir de 1 ate 50 de 1 em 1
}