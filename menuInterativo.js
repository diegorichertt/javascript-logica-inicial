let opcao = " "

while (opcao !== "5"){
    opcao = prompt(
        "=== MENU ===\n" +
        "1 - Opção 1\n" +
        "2 - Opção 2\n" +
        "3 - Opção 3\n" +
        "4 - Opção 4\n" +
        "5 - Encerrar"
    )

    switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1")
      break
    case "2":
      alert("Você escolheu a opção 2")
      break
    case "3":
      alert("Você escolheu a opção 3")
      break
    case "4":
      alert("Você escolheu a opção 4")
      break
    case "5":
      alert("Encerrando o sistema...")
      break
    default:
      alert("Opção inválida")
  }
}