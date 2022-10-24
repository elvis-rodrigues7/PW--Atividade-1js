window.alert("Hello, Word");
window.confirm("Ta com fome?");


var comida = window.prompt("O que você gostaria de comer?");
const numcomida = comida.length;
let maicomida = comida.toUpperCase();
let mincomida = comida.toLowerCase();

document.write("Agora mantenha a calma, faltam só 5 horas para você comer!!auhsaua!!</br>");

document.write(`Você gostaria de comer <strong>${comida}</strong>!. Sua comida tem ${numcomida} letras. </br>`);
document.write(`Você gostaria de comer <strong>${comida}</strong>!. Sua comida tem ${numcomida} letras. </br>`);
document.write(`Você gostaria de comer <strong>${comida}</strong>!. Sua comida em letras maiúsculas é ${maicomida}.</br>`);
document.write(`Você gostaria de comer <strong>${comida}</strong>!. Sua comida em letras minisculas é ${mincomida}.`);

var num1 = Number(window.prompt("Digite um número?"));
var num2 = Number(window.prompt("Digite um segundo número?"));

soma = num1 + num2;

document.write(`O primeiro número é ${num1}, o segundo é ${num2} e a soma é ${soma}.`);