let saldo = Number(prompt("Digite a quantidade inicial de dinheiro:"))
let opcao = ""

while (opcao !== "3") {
  opcao = prompt(
    "Saldo atual: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const valorAdicionar = Number(prompt("Quanto deseja adicionar?"))
      saldo += valorAdicionar
      break

    case "2":
      const valorRemover = Number(prompt("Quanto deseja remover?"))
      saldo -= valorRemover
      break

    case "3":
      alert("Encerrando o sistema financeiro...")
      break

    default:
      alert("Opção inválida")
  }
}