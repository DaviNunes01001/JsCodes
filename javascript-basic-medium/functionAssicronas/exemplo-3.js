// ou const entrega = new Promise((resolve) => setTimeout(() => resolve("🍕Pizza entregue!"), 2000));
// sem chaves pois tem apenas um parametro
const entrega = new Promise((resolve) => {
    setTimeout(() => resolve("🍕Pizza entregue!"), 2000);
});

async function fazerPedido() {
    console.log("pedido feito...");
    const pizza = await entrega;
    console.log(pizza)
}

fazerPedido()