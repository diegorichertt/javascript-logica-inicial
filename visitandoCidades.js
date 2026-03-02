const turista = prompt("Qual é o seu nome?")

let cidadesVisitadas = " "
let quantidade = 0 

let continuar = prompt("Você já visitou alguma cidade? (sim/nao)")

while (continuar === "sim"){
    const cidade = prompt("Qual cidade você visitou?")

    cidadesVisitadas += cidade + "\n"
    quantidade++

    continuar = prompt("Você visitou outra cidade? (sim/nao)")
}

alert (
    "Turista: " + turista +
    "\nQuantidade de cidades: " + quantidade +
    "\nCidades visitadas:\n" + cidadesVisitadas
)