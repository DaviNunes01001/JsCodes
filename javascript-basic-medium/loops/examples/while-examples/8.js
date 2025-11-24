/**
 * @file 8.js
 * @description Calcula a média de 5 notas repetidamente enquanto o usuário desejar.
 */
let quest = prompt("Deseja começar o cálculo da média? (S/N)");

while (quest == "S" || quest == "s") {
  let N1 = parseFloat(prompt("Digite a primeira nota"));
  let N2 = parseFloat(prompt("Digite a segunda nota"));
  let N3 = parseFloat(prompt("Digite a terceira nota"));
  let N4 = parseFloat(prompt("Digite a quarta nota"));
  let N5 = parseFloat(prompt("Digite a quinta nota"));

  let soma = N1 + N2 + N3 + N4 + N5;
  let media = soma / 5;

  alert(`A média de suas notas é ${media.toFixed(2)}`);
  console.log(`A média de suas notas é ${media.toFixed(2)}`);

  quest = prompt("Deseja calcular novamente? (S/N)");
}

alert("Programa encerrado.");
