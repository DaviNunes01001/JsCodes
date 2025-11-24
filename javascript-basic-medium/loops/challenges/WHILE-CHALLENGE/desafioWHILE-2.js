/**
 * @file desafioWHILE-2.js
 * @description Determina o tipo de triângulo a partir de três lados informados pelo usuário.
 */
let per = 0
let com = Number(prompt("Digite 1 para começar"))
if (com === 1) {
    per = 1
}
while (per == 1) {
let A = Number(prompt("insira o lado A"));
let B = Number(prompt("insira o lado B"));
let C = Number(prompt("insira o lado C"));
if (A >= B + C || B >= C + A || C >= A + B) {
  alert("Não é um triângulo");
  console.log("Não é um triângulo");
} else if (A == B && B == C) {
  alert("O triângulo é equilátero");
  console.log("O triângulo é equilátero");
} else if (A == B || A == C || B == C) {
  alert("O triângulo é isósceles");
  console.log("O triângulo é isósceles");
} else {
  alert("O triângulo é escaleno");
  console.log("O triângulo é escaleno");
}
let per1 = prompt("quer continuar? [S/N]")
    if (per1 === "N") {
        per = 2
    }

}

