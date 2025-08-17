// 4) Faça um programa que verifique dois números. O retorno deverá ser true se um dos 
// números é 30 ou se a soma dos dois é 30. Ou ainda será true se os dois números forem 12

let num1 = 16;
let num2 = 14;

let resultado = (num1 === 30 || num2 === 30 || (num1 + num2 === 30) || (num1 === 12 && num2 === 12));
console.log(resultado);