async function fazerRequisicaoAsync(){
    return new Promise( resolve => {
        setTimeout(() => resolve("Ok"), 1000)
    });
}

async function main() {
    console.log("Iniciando...");

    const primeiro = await fazerRequisicaoAsync()
    console.log("Primeiro:", primeiro)

    const segundo = await fazerRequisicaoAsync()
    console.log("Segundo:", segundo)

    console.log("Fim")
}

main()