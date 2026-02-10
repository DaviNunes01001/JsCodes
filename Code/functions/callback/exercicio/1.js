function Sauda(nome, callback) {
    console.log(`Ola ${nome}`)
    callback()
};

Sauda("Davi ", function() {
    console.log("Seja Bem vindo")
});