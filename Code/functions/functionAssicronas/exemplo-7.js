async function fazerRequisicaoAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("OK"), 1000);
    });
}

async function main() {
    console.log("Iniciando paralelo...")

    const [a, b] = await Promise.all([
        fazerRequisicaoAsync(),
        fazerRequisicaoAsync()
    ]);

    console.log("resultados", a, b);
}

main()