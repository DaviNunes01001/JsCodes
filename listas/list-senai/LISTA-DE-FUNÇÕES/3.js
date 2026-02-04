let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));

function calcularMedia(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / 3;
    document.writeln("A média dos números é: " + media);
}

calcularMedia(num1, num2, num3);

