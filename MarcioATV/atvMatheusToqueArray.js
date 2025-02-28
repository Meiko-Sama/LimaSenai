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
