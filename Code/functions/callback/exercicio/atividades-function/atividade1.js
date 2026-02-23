function processarNome(nome,callback){
    callback(nome);
}

processarNome("matheus", function(nome){
    console.log(`ola ${nome}`)
})