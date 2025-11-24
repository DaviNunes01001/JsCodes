function dobrar(n) {
    return n * 2;
}

function triplicar(n) {
    return n * 3;
}

function ehPar(n) {
    return n % 2 === 0;
}

const E = 2.71828;

module.exports = { //exporta as funções
    dobrar,
    triplicar,
    ehPar,
    E
};
