const maiuscula = (texto) => {
    return `Aqui esta o texto maiusculo:${texto.toUpperCase()}`
}

const minuscula = (texto) => {
    return `Aqui esta o texto maiusculo:${texto.toLowerCase()}`
}

const Primeiraletra = (texto) => {
    return `Aqui esta o texto maiusculo:${texto[0]}`
}

module.exports = {
   maiuscula,
   minuscula,
   Primeiraletra
};