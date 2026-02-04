const aplique = require('./5.js')

const texto = ("Lukinhas")

const mensgMai = aplique.maiuscula(texto)
const mensgminus = aplique.minuscula(texto)
const Primeiralet = aplique.Primeiraletra(texto)


console.log("--Aplicação de modulos--");
console.log("palavra toda em maiuscula:" + mensgMai);
console.log("palavra toda em minuscula:" + mensgminus);
console.log("primeira letra da palavra:" + Primeiralet);
