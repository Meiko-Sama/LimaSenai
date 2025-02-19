// -TESTE WHILE- //

let i = 10;
while (i >= 1) {
  console.log("Estou no WHILE!!!!!!!!!!!!!!!!!!!!!!!!!");
  i--;
}

console.log("A condição do WHILE não é mais verdadeira!");

// -Senha CORRETA WHILE- //

const senhaCorreta = "12345";
let senha = prompt("Digite sua senha: ");

while (senha !== senhaCorreta) {
  console.log("A sua senha está incorreta");
  senha = prompt("Digite sua senha: ");
}

console.log("A senha esta correta!");

// -EXEMPLOS do DO WHILE, Ele imprime e depois para- //

do {
  console.log("ESTOU DENTRO DO DOWHILE");
  i++;
  console.log(i);
} while (i <= 10);

do {
  console.log("ESTOU DENTRO DO DOWHILE");
  i++;
  console.log(i);
} while (i > 2);

do {
  senha = prompt("Digite sua senha");
} while (senha !== "1234");

console.log("Senha válida");

let media;

do {
  media = parseFloat(prompt("Digite sua média: "));
} while (media < 0 || media > 10);

console.log("Média Válida!!");
