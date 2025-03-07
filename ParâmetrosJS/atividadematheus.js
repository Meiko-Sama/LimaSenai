// DATA FORMATADA PORQUE SIM, NÃO ESTOU SENDO FORÇADA A FAZER ELA.

let data = new Date();

console.log(
  `${data.getDate()} / 0${data.getMonth() + 1} / ${data.getFullYear()}`
);

let dia = 4;

switch (dia) {
  case 1:
    console.log("Hoje é DOMINGO");
    break;
  case 2:
    console.log("Hoje é SEGUNDA");
    break;
  case 3:
    console.log("Hoje é TERÇA");
    break;
  case 4:
    console.log("Hoje é QUARTA");
    break;
  case 5:
    console.log("Hoje é QUINTA");
    break;
  case 6:
    console.log("Hoje é SEXTA");
    break;
  default:
    console.log("Hoje é SABADO");
}

console.log(
  `${data.getDate()} / 0${
    (data.getMonth() + 1).toString
  } / ${data.getFullYear()}`
);
