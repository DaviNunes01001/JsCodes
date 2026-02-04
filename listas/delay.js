function esperar() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Passaram 2 segundos")
        }, 2000);
    });
}

async function aguardando() {
    console.log("aguardando espera...")
    const recebendoespera = await esperar()
    console.log(recebendoespera)
}

aguardando()