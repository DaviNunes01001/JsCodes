let frutas = [];
let verduras = [];
let contador = 3;

for (let i = 0; i < 3; i++) {
    let fruta = prompt(`Digite ${contador} fruta: `);
    frutas.push(fruta);
    contador--;
}

contador = 3;
for (let i = 0; i < 3; i++) {
    let verdura = prompt(`Digite ${contador} verdura: `);
    verduras.push(verdura);
    contador--;
}

let alimentos = frutas.concat(verduras);

alert(`Você digitou as seguintes frutas e verduras: ${alimentos}`);