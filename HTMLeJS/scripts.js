// -Diz seu nome- //

// const nome = prompt("Digite seu nome: ");
// console.log(nome);
// alert(nome);

// -Você escolhe na ARRAY a fruta que vc quer- //

// const frutas = ["Bananas", "Pera", "Maçã", "Morango"];

// alert(frutas[2]);

// -Os alunos e os nomes, escolha algo deles- //

// const alunos = [
//     { nome: "Thayná", idade: 17 },
//     { nome: "Sarah N.", idade: 16},
//     { nome: "Julia C.", idade: 17},
// ];

// alert(alunos[0].nome);

// -Incremento de número- //

// for (let i = 0; i < 10; i++) {
//   console.log("Valores do for incremento: ", i);
// }

// -Decremento de número- //

// for (let i = 9; i >= 0; i--) {
//   console.log("Valores do for decrementado: ", i);
// }

// -Dizer toda a variavel de uma vez- //

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// -Soma de Números- //

// let soma = 0;
// for (let i = 1; i <= 10; i++) {
//   soma += i;
// }

// console.log(soma);

// -Tabuadas de Números- //

// let valor = parseInt(prompt("Digite o número para tabuada"));

// for (let i = 0; i <= 10; i++) {
//   console.log(`${valor} x ${i} = ${valor * i}`);
// }

// -TESTE WHILE- //

// let i = 10;
// while (i >= 1) {
//   console.log("Estou no WHILE!!!!!!!!!!!!!!!!!!!!!!!!!");
//   i--;
// }

// console.log("A condição do WHILE não é mais verdadeira!");

// -Senha CORRETA WHILE- //

// const senhaCorreta = "12345";
// let senha = prompt("Digite sua senha: ");

// while (senha !== senhaCorreta) {
//   console.log("A sua senha está incorreta");
//   senha = prompt("Digite sua senha: ");
// }

// console.log("A senha esta correta!");

// -EXEMPLOS do DO WHILE, Ele imprime e depois para- //

// let i = 10;
// do {
//   console.log("ESTOU DENTRO DO DOWHILE");
//   i++;
//   console.log(i);
// } while (i <= 10)

//   let i = 1;
// do {
//   console.log("ESTOU DENTRO DO DOWHILE");
//   i++;
//   console.log(i);
// } while (i > 2)

// let senha;

// do {
//   senha = prompt("Digite sua senha");
// } while( senha !== '1234');

// console.log("Senha válida");

let media;

do {
  media = parseFloat(prompt("Digite sua média: "));
} while (media < 0 || media > 10);

console.log("Média Válida!!");
