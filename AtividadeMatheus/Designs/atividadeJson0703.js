// Obter Data Atual: Crie uma função obterDataAtual() que retorne a data atual no formato DD/MM/AAAA.
// Obter Hora Atual: Desenvolva uma função obterHoraAtual() que retorne a hora atual no formato HH:MM:SS.

let deseja = prompt(
  "Deseja saber o horário e a data? Se sim digite (s) se não digite (n): "
);
let data = new Date();

function obterDataAtual(deseja, data) {
  console.log(
    `${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`
  );
  console.log(
    `${data.getHours() - 3}:${data.getMinutes()}:${data.getSeconds()}`
  );
  return;
}

obterDataAtual(deseja, data);

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

let max = parseFloat(prompt("Digite um valor Máximo: "));
let min = parseFloat(prompt("Digite um valor Minímo: "));

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

// Contar Letras: Crie uma função contarLetras(texto) que receba uma string e retorne o número de letras nela.

let frases = prompt(
  "Digite uma frase ou palavra para que conte quantas letras existem nela: "
);
let regex = /\S/g; //

function contarLetras(frases) {
  console.log(frases.split(regex).length - 1);
}

contarLetras(frases);

// Inverter String: Desenvolva uma função inverterString(texto) que retorne o texto invertido.

let frase = prompt("Por favor digite a frase que você quer inverter: ");
let fraseInvertida = "";

function invertePalavra(frase) {
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida = fraseInvertida + frase[i];
  }
  return fraseInvertida;
}

console.log(invertePalavra(frase));

function revStringJSON(palavra) {
  return { parametro: palavra, resultado: invertePalavra(frase) };
}

console.log(revStringJSON(frase));

// Verificar Palíndromo: Crie uma função ehPalindromo(texto) que verifique se uma string é um palíndromo, ignorando espaços e diferenças entre maiúsculas e minúsculas.

let texto = prompt("Digite a frase para verificar se é um palíndromo: ");

function ehPalindromo(texto) {
  if (
    texto.split("").reverse().join("").toLowerCase().replace(/\s+/g, "") ===
    texto.toLowerCase().replace(/\s+/g, "")
  ) {
    console.log("A palavra é um palíndromo!");
  } else {
    console.log("A palavra não é um palíndromo!");
  }
}

ehPalindromo(texto);
