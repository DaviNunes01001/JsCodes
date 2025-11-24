function contador() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
function contagemRegresiva() {
  for (let i = 10; i >= 1; i--) console.log(i);
}

function pares() {
  for (let i = 20; i >= 1; i--) {
    if (i % 2 == 0) console.log(i);
  }
}

function soma() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    soma += i;
    console.log(soma);
  }
}

function tabuada() {
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${i} x ${num} = ${result}`);
  }
}
function lista() {
  let nomes = ["Davi", "Luiza", "Carlos", "Jose"];
  for (let i = 0; i < nomes.length; i++) {
    console.log(`alunos ${i + 1} ${nomes[i]}`);
  }
}
function contarVogais() {
  let palavra = "tacumcarai"
  let vogais = 0;

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase(); // transforma em minúscula pra não errar com maiúsculas

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vogais++;
    }
  }

  console.log(`A palavra "${palavra}" tem ${vogais} vogais.`);
}

function ALLfunctions() {
  console.log("==================");
  contador();
  console.log("==================");
  contagemRegresiva();
  console.log("==================");
  pares();
  console.log("==================");
  soma();
  console.log("==================");
  tabuada();
  console.log("==================");
  lista();
  console.log("==================");
  contarVogais();
  console.log("==================");
}

ALLfunctions()
