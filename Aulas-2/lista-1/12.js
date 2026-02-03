function configurarSistema(padrao, usuario) {
    return {
        ...padrao, ...usuario
    }
};

const confgPadrao = {tema: "claro", size: "90%", idioma: "Padrao(Ingles)"}
const prefeUser = {tema: "escuro", idioma: "Pt-Br"}
const atualiza = configurarSistema(confgPadrao, prefeUser)
console.log(atualiza)