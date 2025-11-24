function divisao(a, b, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = a / b;
            resolve(`Divisão: ${a} / ${b} = ${resultado} | Tempo: ${tempo}ms`);
        }, tempo);
    });
}

function soma(a, b, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = a + b;
            resolve(`Soma: ${a} + ${b} = ${resultado} | Tempo: ${tempo}ms`);
        }, tempo);
    });
}

function subtracao(a, b, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = a - b;
            resolve(`Subtração: ${a} - ${b} = ${resultado} | Tempo: ${tempo}ms`);
        }, tempo);
    });
}

async function All() {
    console.log("recebendo dados das equações...\n");

    const [r1, r2, r3] = await Promise.all([
        divisao(10, 5, 3000),
        soma(10, 5, 3500),
        subtracao(10, 5, 4000)
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

All();
