const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // permite receber json

// rota do teste
app.get("/", (req, res) => {
    res.send("API funcionando");
});

// simulando database
let usuarios = [
    {id: 1, nome: "heloisa"},
    {id: 2, nome: "amanda"},
    {id: 3, nome: "Gabi"},
    {id: 4, nome: "mirella"},
    {id: 5, nome: "barbara"}
];

// fetch - listar usuários
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/usuarios", (req, res)=> {
    const novo = {
        id: usuarios.length + 1,
        nome: req.body.nome
    };
    usuarios.push(novo);
    res.status(201).json(novo)
})

app.put("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({erro: "Usuario não encontrado"});
    }

    usuario.nome = req.body.nome;
    res.json(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);
    usuarios = usuarios.filter(u => u.id !== id);
    res.json({mensagem: "Usuario removido com sucesso"});
});


// subir servidor
app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});
//vfr