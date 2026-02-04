let numPar = [];
let numImpar = [];
let contador = 3;


for (let i = 0; i < 3; i++) {
    let nPar = parseInt(prompt(`Digite ${contador} número par: `));
    numPar.push(nPar);
    
    if (nPar % 2 !== 0) {
        alert("Número inválido! Digite apenas números pares.");
        numPar.pop();
        i--;
        contador++;
    }

    contador--;
}

contador = 3;
for (let i = 0; i < 3; i++) {
    let nImpar = parseInt(prompt(`Digite ${contador} número impares: `));
    numImpar.push(nImpar);
    
    if (nImpar % 2 === 0) {
        alert("Número inválido! Digite apenas números impares.");
        numImpar.pop();
        i--;
        contador++;
    }

    contador--;
}

let num = numPar.concat(numImpar);

alert(`${num}`);