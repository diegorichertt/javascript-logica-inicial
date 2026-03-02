const valorMetros = Number(prompt("Digite um valor em metros: "))

const opcao = prompt(
    "Para qual unidade deseja converter?\n" +
    "1 - milímetro (mm)\n" +
    "2 - centímetro (cm)\n" + 
    "3 - decímetro (dm)\n" +
    "4 - decâmetro (dam)\n" +
    "5 - hectômetro (hm)\n" +
    "6 - quilômetro (km)"
)

let resultado

switch (opcao) {
    case "1":
        resultado = valorMetros * 1000
        alert ("Resultado: " + resultado + " mm")
        break

    case "2":
        resultado = valorMetros * 100
        alert ("Resultado: " + resultado + " cm")
        break

    case "3":
        resultado = valorMetros * 10
        alert ("Resultado: " + resultado + " dm")
        break

    case "4":
        resultado = valorMetros / 10
        alert ("Resultado: " + resultado + " dam")
        break

    case "5":
        resultado = valorMetros / 100
        alert ("Resultado: " + resultado + " hm")
        break

    case "6":
        resultado = valorMetros / 1000
        alert ("Resultado: " + resultado + " km")
        break

    default:
        alert ("Opção inválida")
}

