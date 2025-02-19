// -DATAS COMO MANIPULAR- //

let data = new Date();

console.log(data.getFullYear()); // ANO ATUAL
console.log(data.getMonth() + 1); // Mês 0-11 ???????
console.log(data.getDate()); // Dia do mês
console.log(data.getHours()); // Pega as Horas GW (GREEN WITCH - 3)
console.log(data.getMinutes()); // Pegas os Minutos
console.log(data.getSeconds()); // Pega os Segundos
console.log(data.getDay() + 1); // Pega o dia da Semana (0 - 6)

console.log(data.toLocaleDateString("pt-BR")); // DATA COMPLETA, FORMATAÇÃO
console.log(data.toLocaleString()); // Data - Hora:MIN:SEGUNDOS
console.log(data.toLocaleTimeString()); // HORAS:MIN:SEGUNDOS

console.log(data.getTimezoneOffset());
