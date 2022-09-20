"use strict";
const rootElementExercise01 = document.querySelector("#root");
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
function renderExercise01() {
    if (rootElementExercise01) {
        rootElementExercise01.innerHTML += `
        <div class="item-wrapper">
            <div class="exercise01">
                <h3>
                    1- Uma função que recebe dois parametros, e retorna a soma entre eles.
                </h3>
                <div>
                    <input type="number" id="input01" />
                    <input type="number" id="input02" />
                    <button onclick="handleNarutinho()">Calcular</button>
                    <input id="resposta01" class="input-answer" placeholder="Resposta01" disabled type="text" />
                </div>
                <hr>
            </div>
            <div class="exercise02">
                <h3>2- Uma função que recebe 5 números, e retorna a média deles.</h3>
                <div>
                    <input type="number" id="input03" />
                    <input type="number" id="input04" />
                    <input type="number" id="input05" />
                    <input type="number" id="input06" />
                    <input type="number" id="input07" />
                    <button onclick="handleRADmaiorquecodigniter()">Calcular</button>
                    <input id="resposta02" class="input-answer" placeholder="Resposta02" disabled type="text" />
                </div>
                <hr>
            </div>
            <div class="exercise03">
                <h3>
                    3- Uma função que calcula o IMC (índice de massa corporal) (pesquisem a
                    formula no google, "formula imc")
                </h3>
                <div>
                    <input placeholder="Peso em Kg" min="0" type="number" id="input08" />
                    <input placeholder="Altura em Mts" min="0" type="number" id="input09" />
                    <button onclick="handleAlucardOfagner()">Calcular</button>
                    <input id="resposta03" class="input-answer" placeholder="Resposta03" disabled type="text" />
                </div>
                <hr>
            </div>
            <div>
                <a class="a-button" href="../../index.html">Voltar</a>
            </div>
        </div>
        `;
    }
}
renderExercise01();
