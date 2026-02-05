/**
 * @file Desafio.js
 * @description Menu de lanches usando switch; calcula total com base no código e quantidade.
 */
alert(`
Cód | Produto=========|Preço (R$)==|
100 | Cachorro Quente=|10,00=======|
101 | Bauru===========|12,00====|
102 | Bauru Especial==|15,00=======|
103 | Cheese Burguer==|15,00======|
104 | Cheese Salada===|18,00======|
105 | Cheese Tudo=====|20,00======|
200 | Refri Lata======|4,00=======|
201 | Refri 1,5L======|10,00======|
202 | Refri 2L  ======|14,00======|`);

let cod = Number(prompt("Digite o Codigo do produto Desejado"))
let quant = Number(prompt("Digite a quantidade desejada"))


switch (cod) {
    case 100:
    alert(`${quant}x Cachorro quente, total = R$${quant*10.00.toFixed(3)}`)
    console.log(`${quant}x Cachorro quente, total = R$${quant*10.00.toFixed(3)}`)
    break;

    case 101:
    alert(`${quant}x Bauru, total = R$${quant*12.00.toFixed(3)}`)
    console.log(`${quant}x Bauru, total = R$${quant*12.00.toFixed(3)}`)
    break;

    case 102:
    alert(`${quant}x Bauru especial, total = R$${quant*15.00.toFixed(3)}`)
    console.log(`${quant}x Bauru, total = R$${quant*15.00.toFixed(3)}`)
    break;

    case 103:
    alert(`${quant}x Cheese Burgue, total = R$${quant*15.00.toFixed(3)}`)
    console.log(`${quant}x Cheese Burgue = R$${quant*15.00.toFixed(3)}`)
    break;

    case 104:
    alert(`${quant}x Cheese Salada, total = R$${quant*18.00.toFixed(3)}`)
    console.log(`${quant}x Cheese Salada, total = R$${quant*18.00.toFixed(3)}`)
    break;

    case 105:
    alert(`${quant}x Cheese Tudo, total = R$${quant*20.00.toFixed(3)}`)
    console.log(`${quant}x Cheese Salada, total = R$${quant*20.00.toFixed(3)}`)
    break;

    case 200:
    alert(`${quant}x Refri Lata, total =R$ ${quant*4.00.toFixed(3)}`)
    console.log(`${quant}x Cheese Salada, total =R$ ${quant*4.00.toFixed(3)}`)
    break;

    case 201:
    alert(`${quant}x Refri 1,5L, total = R$${quant*10.00.toFixed(3)}`)
    console.log(`${quant}x Refri 1,5L, total = R$${quant*10.00.toFixed(3)}`)
    break;

    case 202:
    alert(`${quant}x Refri 2L, total = R$${quant*14.00.toFixed(3)}`)
    console.log(`${quant}x Refri 2L, total = R$${quant*14.00.toFixed(3)}`)
    break;

    default:
    break;
}