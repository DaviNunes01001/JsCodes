const entrega = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("🍕Pizza entregue!");
    }, 2000);
});

console.log("pedido feito... (esperando)");
entrega.then(msg => console.log(msg));