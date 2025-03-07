// Obter Data Atual: Crie uma função obterDataAtual() que retorne a data atual no formato DD/MM/AAAA.
// Obter Hora Atual: Desenvolva uma função obterHoraAtual() que retorne a hora atual no formato HH:MM:SS.

let frase = prompt(
  "Deseja saber o horário e a data? Se sim digite (s) se não digite (n): "
);
let data = new Date();

function obterDataAtual(frase, data) {
  console.log(
    `${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`
  );
  console.log(
    `${data.getHours() - 3}:${data.getMinutes()}:${data.getSeconds()}`
  );
  return;
}

obterDataAtual(frase, data);

// Hipotenusa: Desenvolva uma função calcularHipotenusa(a, b) que calcule a hipotenusa de um triângulo retângulo usando o Teorema de Pitágoras.

let n1 = parseFloat(prompt("Digite o valor de A: "));
let n2 = parseFloat(prompt("Digite o valor de B: "));

function hipotenusa(n1, n2) {
  let resultado = Math.hypot(n1, n2);
  console.log("O resultado de C ao quadrado é: ", resultado);
}

hipotenusa(n1, n2);

// Com POW

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));

function hipotenusa(a, b) {
  let c = Math.sqrt(Math.pow(a, 3) + Math.pow(b, 3));
  console.log("O resultado da soma: ", c);
}

hipotenusa(a, b);

// Número Aleatório: Crie uma função gerarNumeroAleatorio(min, max) que gere um número aleatório entre os valores min e max (inclusive).

let max = prompt("Digite um valor Máximo: ");
let min = prompt("Digite um valor Minímo: ");

function gerarNumeroAleatorio(min, max) {
  console.log(Math.random() * (max - min + 1) + min);
}

gerarNumeroAleatorio(min, max);

// Fatorial: Escreva uma função calcularFatorial(n) que calcule o fatorial de um número.

let n = parseInt(prompt("Digite o valor que você desea fatoriar: "));
let resultado = 1;

function calcularFatorial(n) {
  for (let i = n; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcularFatorial(n));
