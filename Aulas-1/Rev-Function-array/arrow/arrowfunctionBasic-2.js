const cumprimentar = (nome) => "Ola, " + nome + "!";
console.log(cumprimentar("Lucas"));
console.log("=======");

const soma = (a, b) => a + b;
console.log(soma(50, 50));
console.log("=======");

const sub = (a, b) => a - b;
console.log(sub(30, 20));
console.log("=======");

const divi = (a, b) => a / b;
console.log(divi(10, 2));
console.log("=======")

const media = (notas = [4, 5, 7, 10]) => {
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const resultado = soma / notas.length;
    return resultado;
}

console.log(media()); 
