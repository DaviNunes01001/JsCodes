async function fazerRequisicaoAsync() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("🎲 Dados da requisição");
        }, 1000);
    });
}

async function minhaFuncaoAsync() {
    const resultado = await fazerRequisicaoAsync();
    console.log(resultado);
}

minhaFuncaoAsync();