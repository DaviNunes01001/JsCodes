function contarLetras(palavra) {
    return palavra.length;
};

const Inverter = (palavra) => {return palavra.split('').reverse().join('');};

module.exports = {
    contarLetras, 
    Inverter
};