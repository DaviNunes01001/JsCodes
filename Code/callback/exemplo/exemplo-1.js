function saudacao(nome, callback) {
    console.log("Olá " + nome)
    callback()
}
saudacao("Maria", function() {
    console.log("Bem-vinda!");
});
