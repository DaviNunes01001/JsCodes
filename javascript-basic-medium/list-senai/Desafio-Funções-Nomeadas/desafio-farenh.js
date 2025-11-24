function Lerfahrenheit() {
    let fahrenheit;
    while (true) {
        fahrenheit = parseFloat(prompt("Digite o valor em fahrenheit"));
        if (fahrenheit >= 212) {
            break;
        }
        alert("Erro digite novamente");
    }
    return fahrenheit;
}

function calc(valor) {
    let celsius = ((valor - 32) * 5/9).toFixed(2);
    let aviso = (valor + "°F é igual a " + celsius + "°C");
    return aviso;
}

let valor = Lerfahrenheit();
let resultado = calc(valor);
document.writeln(resultado);
