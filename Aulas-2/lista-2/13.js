function fazerJogada(tabuleiro, posicao, simbolo) {
    const novoTabu = tabuleiro
    novoTabu[posicao] = simbolo
    return novoTabu
}
const tabuleiro_ = ["", "", "", "", "", "", "", "", ""]
const posicao_ = 0
const simbolo_ = "🎅"

console.log(fazerJogada(tabuleiro_,posicao_,simbolo_))
