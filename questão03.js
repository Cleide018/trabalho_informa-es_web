// 3) Escreva um programa que faça a conversão de temperaturas entre Celsius e Fahrenheit.

//celsius para fanrenheit
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`);

//fanrenheit para celsius
let f = 77;
let c = (f - 32) * 5/9;
console.log(`${f}°F equivale a ${c.toFixed(2)}°C`);