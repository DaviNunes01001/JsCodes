function Sauda(nome, callback) {
    callback(nome)
};

Sauda("Davi ", function(nome) {
    console.log(`Seja Bem vindo: ${nome}`)
});