/**
 * @file Exercício_2–Calc.js
 * @description Calculadora simples usando switch para escolher a operação.
 */
let N1 = Number(prompt("Digite um numero"));
let N2 = Number(prompt("Digite outro numero"));
let OP = Number(prompt(
`escolha qual operação você deseja fazer \n 
\n1: + para soma
\n2: - para subtração
\n3: * para multiplicação
\n4: / para divisão-`))
console.log(
`escolha qual operação você deseja fazer \n 
\n1: para soma
\n2: para subtração
\n3: para multiplicação
\n4: para divisão-`)
 
switch (OP) {
    case 1:
    alert(N1+N2) 
    console.log(N1+N2) 
    break;

    case 2:
    alert(N1-N2) 
    console.log(N1-N2) 
    break;

    case 3:
    alert(N1*N2) 
    console.log(N1*N2) 
    break;

    case 4:
    alert(N1/N2) 
    console.log(N1/N2) 
    break;

    default:
    console.log("Operação invalida")
    break;
}