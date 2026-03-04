let numero = Number(prompt("Digite um número para ver a tabuada:"))

let resultado = " "

for (let i=1; i<=20; i++) {
    resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n"
}

alert ("Tabuada do número " + numero + "\n\n" + resultado)