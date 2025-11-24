function triplicar(valor) {
      let resultado = valor * 3
      document.writeln(resultado)
}

function processarNumero() {
    let num = Number(prompt("Digite um numero que queira multiplicar por 3"))
    triplicar(num)
}

processarNumero()