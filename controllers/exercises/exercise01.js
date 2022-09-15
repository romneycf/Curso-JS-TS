"use strict";
function narutinho(num1, num2) {
    return num1 + num2;
}
function radmaiorquecodigniter(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}
//IMC = Peso / (Altura * Altura)
function alucardOfagner(peso, altura) {
    return (peso / (altura * altura));
}
function handleNarutinho() {
    const num01 = document.getElementById('input01').value;
    const num02 = document.getElementById('input02').value;
    const resposta = narutinho(Number(num01), Number(num02));
    console.log(resposta); //Pq vc pediu
    document.getElementById('resposta01').value = resposta.toString();
}
function handleRadmaiorquecodigniter() {
    const num03 = document.getElementById('input03').value;
    const num04 = document.getElementById('input04').value;
    const num05 = document.getElementById('input05').value;
    const num06 = document.getElementById('input06').value;
    const num07 = document.getElementById('input07').value;
    const resposta = radmaiorquecodigniter(Number(num03), Number(num04), Number(num05), Number(num06), Number(num07));
    console.log(resposta); //Pq vc pediu
    document.getElementById('resposta02').value = resposta.toString();
}
function handleAlucardOfagner() {
    const num08 = document.getElementById('input08').value;
    const num09 = document.getElementById('input09').value;
    const resposta = alucardOfagner(Number(num08), Number(num09));
    console.log(resposta); //Pq vc pediu
    document.getElementById('resposta03').value = resposta.toFixed(2).toString();
}
