function criarUsuario(nome, email) {
    

    if (nome.length < min) {
        return `Erro tem poucos caracteres minimo ${min}.`;
    } else if (nome.length > max) {
        return `Erro muiros caracteres maximo ${max} .`;
    } else {
        return `${nome}\n${email}`;
    }
}

function validarEmail(email) {
    return `Email: ${email}`;
}

const min = 5;
const max = 20;

exports.criarUsuario = criarUsuario;
exports.validarEmail = validarEmail;
exports.min = min;
exports.max = max;
