function buscarDados(id, callback) {
    setTimeout(function() {
        console.log("Dados carregando para ID: " + id);
        callback({id: id, nome: "João"});
    }, 3000)
    console.log("Buscando dados...")
}
buscarDados(1, function(dados) {
    console.log("processando: " + dados.nome);
});