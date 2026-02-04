let nomes = [];

nomes.push(prompt("Digite o primeiro nome:"));
nomes.push(prompt("Digite o segundo nome:"));
nomes.push(prompt("Digite o terceiro nome:"));

 let nomesMaiusculos =nomes.map(nome => nome.toUpperCase());
 let nomesMinusculos = nomes.map(nome => nome.toLowerCase());

console.log("Nomes originais:" + nomes);
alert("Nomes originais:" + nomes)

console.log("Nomes em MAIÚSCULAS:" + nomesMaiusculos);
alert("Nomes em MAIÚSCULAS:" + nomesMaiusculos)

console.log("Nomes em minúsculas:" + nomesMinusculos);
alert("Nomes em minúsculas:" + nomesMinusculos)



