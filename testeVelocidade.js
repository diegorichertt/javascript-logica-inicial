const veiculo1 = prompt("Nome do primeiro veículo: ")
const velocidade1 = Number (prompt("Velocidade do primeiro veículo: "))

const veiculo2 = prompt("Nome do segundo veículo:")
const velocidade2 = Number(prompt("Velocidade do segundo veículo: "))

if (velocidade1 > velocidade2){
    alert(veiculo1 + " é mais rápido que " + veiculo2)
} else if (velocidade2 > velocidade1){
    alert(veiculo2 + " é mais rápido que " + veiculo1)
} else {
    alert("O " + veiculo1 +" e o " + veiculo2 + " tem a mesma velocidade")
}