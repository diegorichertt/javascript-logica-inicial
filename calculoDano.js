const nomeAtacante = prompt("Nome do personagem atacante: ")
const poderAtaque = Number(prompt("Poder de ataque: "))

const nomeDefensor = prompt("Nome do personagem defensor: ")
let vidaDefensor = Number(prompt("Pontos de vida do defensor: "))
const poderDefesa = Number (prompt("Poder de defesa: "))
const possuiEscudo = prompt("Possui escudo? (sim/nao)")

let dano = 0

if (poderAtaque > poderDefesa){
    if (possuiEscudo === "sim"){
        dano = (poderAtaque - poderDefesa) / 2
    } else {
        dano = poderAtaque - poderDefesa
    }
}

vidaDefensor = vidaDefensor - dano

alert(
  "Dano causado: " + dano +
  "\n\nAtacante: " + nomeAtacante +
  "\nPoder de ataque: " + poderAtaque +
  "\n\nDefensor: " + nomeDefensor +
  "\nVida restante: " + vidaDefensor +
  "\nDefesa: " + poderDefesa +
  "\nEscudo: " + possuiEscudo
)