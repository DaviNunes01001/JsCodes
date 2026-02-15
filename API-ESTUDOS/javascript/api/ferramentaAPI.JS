const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});
// simulando database ferramentas
let ferramentas = [
  { id: 1, nome: "martelo", preco: 25, disponivel: true },
  { id: 2, nome: "chave de fenda", preco: 15, disponivel: true },
  { id: 3, nome: "martelo", preco: 32, disponivel: true },
  { id: 4, nome: "martelo", preco: 54, disponivel: true },
];
// ======================================================================
// GET /ferramentas - retorna todas as ferramentas
// ======================================================================
app.get("/ferramentas", (req, res) => {
  //get
  res.json(ferramentas); // expor ferramentas em json
});
app.get("/ferramentas/:id", (req, res) => {
    const id = Number(req.params.id)
    const ferramenta = ferramentas.find(f => f.id === id)
  res.json(ferramenta); // expor ferramentas em json
});
// ======================================================================
// Post /ferramentas - adiciona uma nova ferramenta
// ======================================================================
app.post("/ferramentas", (req, res) => {
  const Novaferramenta = {
    id: ferramentas.length + 1,
    nome: req.body.nome,
    preco: req.body.nome,
    disponivel: req.body.nome,
  };
  ferramentas.push(Novaferramenta); //colocar final da lista
  res.status(201).json(Novaferramenta);
});
//// ===================================================================================
// Put permite atualizar o campo de ferramentas, fazendo alterações em tudo menos no id
// =====================================================================================
app.put("/ferramentas/:id", (req, res) => {
  const id = Number(req.params.id);
  const ferramenta = ferramentas.find((f) => f.id === id);

  if (!ferramentas) {
    return res.status(404).json({ erro: "Ferramenta nao encontrada" });
  }
  ferramenta.nome = req.body.nome;
  res.json(ferramentas);
});
// ======================================================================
// Delete /ferramentas/:id - remove uma ferramenta pelo id
// ======================================================================
app.delete("/ferramentas/:id", (req, res) => {
  const id = Number(req.params.id);
  ferramentas = ferramentas.filter((f) => f.id !== id);
  res.json({ mensagem: "Usuario removido com sucesso" });
});
//==============================================================
// Inicia o servidor
//==============================================================
app.listen(PORT, () => {
  console.log(`servidor rodando em http://localhost:${PORT}`);
});
//=============================================== 
// Porta em que o serviço esta rodando
//===============================================