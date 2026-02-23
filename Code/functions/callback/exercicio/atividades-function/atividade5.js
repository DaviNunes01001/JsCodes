function baixarArquivo(url, callback) {
    console.log(`Iniciando o download do arquivo: ${url}`);
    setTimeout(function() {
        const conteudo = `Conteúdo do arquivo baixado de ${url}`;
        console.log("Download concluído");
        callback(conteudo);
    }, 2000);
}

baixarArquivo("Minecraft", function(conteudo) {
    console.log(`Processando o conteúdo do arquivo: ${conteudo}`);
});