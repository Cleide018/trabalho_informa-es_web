//1) Escreva um programa em Javascript que exiba propriedades de data e hora no seguinte formato:
//◦ Hoje é: [dia da semana].
//◦ A hora atual é: [hora atual no formato de HH:MM:SS].


const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const agora = new Date();

const dia = diasSemana[agora.getDay()];

let horas = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();

// Adiciona zero à esquerda se necessário
horas = horas.toString().padStart(2, '0');
minutos = minutos.toString().padStart(2, '0');
segundos = segundos.toString().padStart(2, '0');

console.log(`Hoje é: ${dia}.`);
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`);
