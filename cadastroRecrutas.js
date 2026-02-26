const primeiroNome = prompt("Digite seu primeiro nome:");
const sobrenome = prompt("Digite seu sobrenome:");
const campoEstudo = prompt("Digite seu campo de estudo:");
const anoNascimento = prompt("Digite seu ano de nascimento:");

const anoAtual = 2026
const idade = anoAtual - anoNascimento

alert(
    "Recruta: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudos: " + campoEstudo +
    "\nIdade: " + idade + " anos"
)