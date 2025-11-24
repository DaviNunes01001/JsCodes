function dividi(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("nao da pra dividir 0")
        } else {
            resolve(a / b)
        }
    })
}

async function calc() {
    try {
        const resultado1 = await dividi(10, 2);
        console.log(`divsao: 10 / 2 = ${resultado1}`);

        const resultado2 = await dividi(10, 0);
        console.log(`divisao: 10 / 0 = ${resultado2}`);
    } catch (erro) {
        console.log("Erro:", erro);
    }
}

calc();
