let frase = " Uma frase qualquer! ";

let palavras = ["Uma", "frase"];

// TAMANHO DA STRING //
console.log(frase.length);

// CARACTERES EM MAIÚSCULOS //
console.log(frase.toUpperCase());

// CARACTERES EM MINÚSCULOS //
console.log(frase.toLowerCase());

// REMOVE OS ESPAÇO DO INICIO E DO FINAL DO STRING //
console.log(frase.trim());

// ENCONTRA A PRIMEIRA OCORRÊNCIA DA PALAVRA NA STRING  //
console.log(frase.indexOf("frase"));

// ENCONTRA A ULTIMA OCORRÊNCIA DA PALAVRA NA STRING  //
console.log(frase.lastIndexOf("frase"));

// VERIFICAR SE A PALAVRA CONTEM NA STRING OU NAO  //
console.log(frase.includes("frase"));

// EXTRAIR UMA PRATE DA STRING //
console.log(frase.slice(3, 6));

// SUBSTITUIR A TODAS AS OCORRÊNCIA  //
console.log(frase.replaceAll("frase", "incrivel"));

// JUNTAR OS ELEMENTOS DE ARRAY  //
console.log(palavras.join(" "));

// ESEPARAR UMA STRING EM UM ARRAY  //
console.log(frase.split(" "));

// INVERTER O MEU ARRAY DE STRING //
console.log(frase.split(" ").reverse());
console.log(palavras.reverse());

// REMOVER TODOS OS ESPAÇOS//
console.log(frase.replace(/\s+/g, ""));

// SALVE //