const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Bruna", ativo: true }
];

const resultado = usuarios.map(usuario => console.log(`${usuario.nome} - ${usuario.ativo ? 'ativo' : 'inativo'}`));
