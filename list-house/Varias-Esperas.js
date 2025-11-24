function Primeira(prime) {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(`Função ${prime}`)
        }, 1000)
    })
}
function segunda(prime) {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(`Função ${prime}`)
        }, 3000)
    })
}
function terceira(prime) {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(`Função ${prime}`)
        }, 5000)
    })
}

async function recebendoEsperas() {
    console.log("Aguardanndo...")
    const [espera1, espera2, espera3] = await Promise.all([
        Primeira(1),
        segunda(2),
        terceira(3)
    ])
    console.log(espera1)
    console.log(espera2)
    console.log(espera3)
}


recebendoEsperas()