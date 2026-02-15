function verificarTriangulo(a, b, c) {

    // Verifica se forma triângulo
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Forma um triângulo ✅");

        // Verifica o tipo
        if (a === b && b === c) {
            console.log("Tipo: Equilátero");
        } 
        else if (a === b || a === c || b === c) {
            console.log("Tipo: Isósceles");
        } 
        else {
            console.log("Tipo: Escaleno");
        }

    } else {
        console.log("Não forma triângulo ❌");
    }
}

// Teste
verificarTriangulo(3, 4, 5);
