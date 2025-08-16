//10) Escreva um programa Javascript que converta o nome e sobrenome de uma pessoa no
//formato:
//Exemplo: “Alan Mathison Turing”.
//Resultado: “T. M. Alan”.

let nomeCompleto = "Alan Mathison Turing";

let partes = nomeCompleto.split(" ");

let inicial1 = partes[1][0].toUpperCase(); 
let inicial2 = partes[2][0].toUpperCase(); 

let resultado = `${inicial1}. ${inicial2}. ${partes[0]}`;
console.log(resultado);