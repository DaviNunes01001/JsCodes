// Array para armazenar os números originais
let numeros = []

// Loop para coletar 5 números do usuário
for(let i = 0; i < 5; i++) {
   // Solicita e converte cada número para tipo Number
   let pergunta = Number(prompt("Digite 5 numeros"))
   numeros.push(pergunta) // Adiciona o número ao array
}

// Usa map para criar um novo array com cada número elevado ao quadrado
let numerosDobro = numeros.map(numeros => numeros * numeros);

// Mostra os números originais
alert(`Numeros antes do dobro ${numeros}`)
// Mostra os números elevados ao quadrado
alert(`Numeros após o dobro ${numerosDobro}`)

    