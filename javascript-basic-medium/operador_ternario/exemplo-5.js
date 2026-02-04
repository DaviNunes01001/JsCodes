function fazerLogin(usuario, senha) {
return usuario === "admin" && senha === "123" ? "Login realizado com sucesso" : "Usuario ou senha invalida"}
console.log(fazerLogin("admin", "123"))
console.log(fazerLogin("user", "233"))
 