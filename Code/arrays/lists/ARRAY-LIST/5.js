/**
 * @file 5.js
 * @description Lê 10 números e compara com um valor X, contando maiores, menores e iguais.
 */
let verificardor = true;

while(verificardor){
    const numbers = [];
    const X = Number(prompt("Escolha um numero separado: "))
    let index = 0;
    
    if (X <= 0){
        alert("Apenas numeros maiores que 0!");
        continue;
    }

    while (numbers.length < 10) {
        const input = prompt(`Digite um número (${numbers.length + 1}/10):`);
        const num = Number(input);

        if (input <= 0){
            alert("Coloque apenas numeros maiores que 0!");
            continue;
        }

        numbers[index] = num;
        index++;
    }
    
    // contadores para cada condiçao
    let maioresQueX = 0;
    let menoresQueX = 0;
    let iguaisAX = 0;

    // verificar cada numero do array
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > X) {
            maioresQueX++;
        } else if(numbers[i] < X) {
            menoresQueX++;
        } else {
            iguaisAX++;
        }
    }

    // exibir resultados
    alert(`
        Números maiores que ${X}: ${maioresQueX}
        Números menores que ${X}: ${menoresQueX}
        Números iguais a ${X}: ${iguaisAX}
    `);

    verificardor = false;
}