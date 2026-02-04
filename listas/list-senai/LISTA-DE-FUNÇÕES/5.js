let idade = Number(prompt("Qual é sua idade: "));

function maiorOuMenorQue18(idade) {

    if (isNaN(idade)) {
        document.writeln("Idade inválida");
        return;
    }

    if (idade < 18) {
        document.writeln("Você é menor de idade");
    } else {
        document.writeln("Você é maior de idade");
    }
    
}

maiorOuMenorQue18(idade);

