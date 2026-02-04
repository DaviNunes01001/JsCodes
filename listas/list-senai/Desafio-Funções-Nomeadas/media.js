function VerificaNotas() {
  let n1 = parseFloat(prompt("Digite o valor da primeira nota"));
  let n2 = parseFloat(prompt("Digite o valor da segunda nota"));
  let n3 = parseFloat(prompt("Digite o valor da terceira nota"));

  if (n1 <= 0 || n1 > 10 || n2 <= 0 || n2 > 10 || n3 <= 0 || n3 > 10) {
    alert("Um dos valores é inválido!");
    return null; 
  } else {
    let notas = [n1, n2, n3];
    let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let media = soma / 3;
    return { n1, n2, n3, media }; 
  }
}

function Lerletras() {
  let letras = prompt("Digite a letra A para calcular a média aritmética ou P para a média ponderada").toUpperCase();

  if (letras === "A") {
    alert("Opção escolhida: A - Média aritmética");
    return "A";
  } else if (letras === "P") {
    alert("Opção escolhida: P - Média ponderada");
    return "P";
  } else {
    alert("Opção inválida!");
    return null;
  }
}

function Aopp(dados, tipo) {
  if (!dados) return;

  if (tipo === "A") {
    alert(`A média aritmética é ${dados.media.toFixed(2)}`);
  } else if (tipo === "P") {
    let pont = (dados.n1 * 5 + dados.n2 * 3 + dados.n3 * 2) / 10;
    alert(`A média ponderada é ${pont.toFixed(2)}`);
  }
}


let dados = VerificaNotas();
let tipo = Lerletras();
Aopp(dados, tipo);
