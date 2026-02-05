/**
 * @file Exercício-1-Rua.js
 * @description Exemplo de uso do switch para mapear números a nomes de ruas.
 */
let torre = Number(prompt("Digite o numero da torre (1-5): "))

switch(torre) {
    case 1:
        console.log("Rua das Amoreiras")
        alert("Rua das Amoreiras")
        break
    case 2:
        console.log("Rua das Acácias")
        alert("Rua das Acácias")
        break
    case 3:
        console.log("Rua das Violetas")
        alert("Rua das Violetas")
        break
    case 4:
        console.log("Rua das Camélias")
        alert("Rua das Camélias")
        break
    case 5:
        console.log("Rua das Orquídeas")
        alert("Rua das Orquídeas")
        break
    default:
        console.log("Torre inválida")
        alert("Torre inválida")
        break
}