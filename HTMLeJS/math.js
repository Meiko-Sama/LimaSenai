// -FUNÇÃO MATH (AAAAAAAAAAAAAAAAAAAAAAAAAAAAA- //

// ARREDONDA TANTO PARA CIMA QUANTO PARA BAIXO O MAIS PROXIMO (ROUND) //
console.log(Math.round(4.7));
console.log(Math.round(4.3));

// ARREDONDA SO PARA BAIXO (FLOOR) //

console.log(Math.floor(4.9));
console.log(Math.floor(4.7));

// ARREDONDA PARA CIMA (CEIL) //

console.log(Math.ceil(4.2));
console.log(Math.ceil(4.1));

// RETORNA SEMPRE O MAIOR VALOR (MAX) //

console.log(Math.max(10, 30, 40, 20));
console.log(Math.max(100, 20, 30, 10));

// RETORNA SEMPRE O MENOR VALOR (MIN) //

console.log(Math.max(1, 30, 13, 86));
console.log(Math.max(100, 71, 32, 10));

// EXPONENCIAÇÃO (BASE ^ EXPOENTE) (POW) //

console.log(Math.pow(2, 3));
console.log(Math.pow(4, 8));

// RETORNA A RAIZ QUADRADA (SQRT) //

console.log(Math.sqrt(16));
console.log(Math.sqrt(4));

// PI = Dirá o valor do PI, não precisa de () e ponto virgula //

const pi = Math.PI;
console.log(Math.PI);

// GERA NUMERO ALEATORIO ENTRE 0 e 1 (RANDOM) //
// GERA NUMERO ALEATORIO ENTRE 0 e 10 (RANDOM) //

const qntNumeros = 10;
console.log(Math.random() * (qntNumeros + 1));

// GERA NUMERO ALEATORIO ENTRE MAX e MIN (Incluindo os dois) //

const max = 10;
const min = 1;
console.log(Math.random() * (max - min + 1) + min);
