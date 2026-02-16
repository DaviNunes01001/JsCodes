const aumentar = document.getElementById('aumenta');
const diminui = document.getElementById('diminui');
const numero = document.getElementById('numero');

let contador = 0

aumentar.addEventListener("click", () => {
    contador++;
    numero.textContent = contador
})

diminui.addEventListener("click", () => {
    contador--;
    numero.textContent = contador
})