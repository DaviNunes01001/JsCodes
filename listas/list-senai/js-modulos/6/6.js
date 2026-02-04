const calcularImposto = (valor) => valor * 0.10;

const calcularDesconto = (valor, percentual) => valor - (valor * percentual / 100);

const formatarMoeda = (valor) => `R$${valor.toFixed(2)}`;

module.exports = {
    calcularImposto,
    calcularDesconto,
    formatarMoeda
};
