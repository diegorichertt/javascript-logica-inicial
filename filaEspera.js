let fila = []
let opcao = ""

do {
    let listaPacientes = ""
    for (let i = 0; i < fila.length; i++) {
        listaPacientes += (i + 1) + "° " + fila[i] + "\n"
    }

    opcao = prompt (
        "Pacientes na fila:\n" + 
        listaPacientes +
        "\nEscolha uma opção:\n" +
        "1 - Novo paciente\n" +
        "2 - Consultar paciente\n" +
        "3 - Sair"
    )

    if (opcao === "1"){
        let novoPaciente = prompt ("Digite o nome do paciente:")
        fila.push(novoPaciente)
    }

    else if (opcao === "2") {
        if (fila.length > 0) {
            let pacienteConsultado = fila.shift()
            alert("Paciente consultado: " + pacienteConsultado)
          } else {
            alert("Não há pacientes na fila.")
          }
    }


} while (opcao !== "3")

    alert("Encerrando sistema.")