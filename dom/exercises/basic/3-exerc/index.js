const input = document.getElementById("inputTarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const tema = document.getElementById("Tema")


tema.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")) {
        tema.textContent = "Tema Claro";
    } else {
        tema.textContent = "Tema escuro"
    }
})

botao.addEventListener("click", () => {
  const texto = input.value;

  if (texto !== "") {
    let li = document.createElement("li");
    li.textContent = texto;

    lista.appendChild(li);

    input.value = "";
  }
});
