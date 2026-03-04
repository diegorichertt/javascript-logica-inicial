let baralho = []
let opcao = ""

do {

  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1 - Adicionar carta" +
    "\n2 - Puxar carta" +
    "\n3 - Sair"
  )

  if (opcao === "1") {
    let carta = prompt("Digite o nome da carta:")
    baralho.push(carta)
  }

  else if (opcao === "2") {
    if (baralho.length > 0) {
      let cartaPuxada = baralho.pop()
      alert("Carta puxada: " + cartaPuxada)
    } else {
      alert("O baralho está vazio.")
    }
  }

} while (opcao !== "3")

alert("Encerrando baralho.")