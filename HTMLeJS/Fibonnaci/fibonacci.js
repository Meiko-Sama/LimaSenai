let numero1 = 0;
let numero2 = 1;
let soma = 0;
let num = parseFloat(prompt("Digite um valor: "));

console.log(numero1);
console.log(numero2);

function fibonacci(num) {
  for (let i = 0; i <= num; i++) {
    soma = numero1 + numero2;
    numero1 = numero2;
    numero2 = soma;

    if (soma <= num) {
      console.log(soma);
    }
  }
}

fibonacci(num);
