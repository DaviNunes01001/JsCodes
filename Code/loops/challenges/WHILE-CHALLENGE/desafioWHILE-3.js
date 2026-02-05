/**
 * @file desafioWHILE-3.js
 * @description Menu interativo com várias conversões e cálculo de IMC usando loop while e switch.
 */
let op = 0;

while (op !== 6) {
  op = Number(prompt(`
Digite a operação desejada:
1️⃣ Conversão de Graus Fahrenheit → Graus Celsius
2️⃣ Conversão de Graus Celsius → Fahrenheit
3️⃣ Conversão de Litros → Galões
4️⃣ Conversão de Galões → Litros
5️⃣ Cálculo do IMC
6️⃣ Encerrar`));

  switch (op) {
    // 1️⃣ Conversão de Graus Fahrenheit → Graus Celsius
    case 1:
      let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
      let celsius = (fahrenheit - 32) * 5 / 9;
      alert(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
      break;

    // 2️⃣ Conversão de Graus Celsius → Fahrenheit
    case 2:
      let cel = parseFloat(prompt("Digite a temperatura em Celsius:"));
      let fahre = (cel * 1.8) + 32;
      alert(`${cel}°C é igual a ${fahre.toFixed(2)}°F`);
      break;

    // 3️⃣ Conversão de Litros → Galões
    case 3:
      let litro_ = Number(prompt("Digite o volume em litros:"));
      let galao_ = litro_ * 0.264172;
      alert(`${litro_} L = ${galao_.toFixed(2)} galões`);
      break;

    // 4️⃣ Conversão de Galões → Litros
    case 4:
      const galao = 3.7854;
      let galoes = parseFloat(prompt("Digite a quantidade de galões:"));
      let litros = galoes * galao;
      alert(`${galoes} galões equivalem a ${litros.toFixed(2)} litros.`);
      break;

    // 5️⃣ Cálculo do IMC
    case 5:
      let peso = parseFloat(prompt("Digite seu peso em kg:"));
      let altura = parseFloat(prompt("Digite sua altura em metros:"));
      let imc = peso / (altura * altura);
      alert(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        alert("Abaixo do peso (magreza)");
      } else if (imc < 25) {
        alert("Peso normal (eutrófico)");
      } else if (imc < 30) {
        alert("Sobrepeso");
      } else if (imc < 35) {
        alert("Obesidade Grau I");
      } else if (imc < 40) {
        alert("Obesidade Grau II");
      } else {
        alert("Obesidade Grau III");
      }
      break;

    // 6️⃣ Encerrar
    case 6:
      alert("Programa encerrado!");
      break;

    // Opção inválida
    default:
      alert("Opção inválida! Tente novamente.");
  }
}
