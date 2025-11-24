exports.NOME_SISTEMA = "Controle de Estoque"; //nome estoque

exports.VERSAO = "2.5"; //ver sist

exports.exibirInfo = () => { //function de exibição
    console.log(`Sistema: ${exports.NOME_SISTEMA}`);
    console.log(`Versão: ${exports.VERSAO}`);
};