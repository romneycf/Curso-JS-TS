"use strict";
const rootElement = document.querySelector("#root");
const exercises = [
    { id: 1, tema: 'Funções', descrição: 'Funções matemáticas simples.', link: '/views/exercises/exercise01.html' },
    { id: 2, tema: 'Arrays', descrição: 'Métodos de arrays.', link: '/views/exercises/exercise02.html' },
    { id: 3, tema: 'Lojinha', descrição: 'Modelo de e-comerce.', link: '/views/exercises/exercise03.html' },
    { id: 4, tema: 'Requisição', descrição: 'Fetch', link: '/views/exercises/exercise04.html' },
    { id: 5, tema: 'Consumo Api', descrição: 'API', link: '/views/exercises/exercise05.html' }
];
function calcMedia(...args) {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(Math.round(((sum / arguments.length) + Number.EPSILON) * 100) / 100);
    return Math.round(((sum / arguments.length) + Number.EPSILON) * 100) / 100;
}
function handleCalcmedia(id) {
    const funcionalidade = document.querySelector("#grade-input-funcionalidade-" + id).value;
    const estilo = document.querySelector("#grade-input-estilo-" + id).value;
    const critatividade = document.querySelector("#grade-input-critatividade-" + id).value;
    const media = calcMedia(Number(funcionalidade), Number(estilo), Number(critatividade));
    media < 6 ? document.querySelector("#item-final-grade-" + id).style.color = 'red' : document.querySelector("#item-final-grade-" + id).style.color = '';
    (document.querySelector("#item-final-grade-" + id).innerHTML) = media.toString();
}
function btaccess(link) {
    return window.location.href = link;
}
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
        <div class="item-wrapper neon-card">
            <div class="item-description">
              <h2>${item.id} - ${item.tema}</h2>
              <h3>${item.descrição}</h2>
                <div class="neon-button">
                    <button class="btn btn-neon" onclick="btaccess('${item.link}')">            
                        <span></span>
                        <span></span>           
                        <span></span>
                        <span></span>
                        Acessar
                    </button>
                </div>
            </div>
            <div class="item-grades">
                <h2>Notas</h2>
                <table>
                    <thead>
                        <th style="text-align: left">Funcionalidade</th>
                        <th style="text-align: left">Estilo</th>
                        <th style="text-align: left">Criatividade</th>
                    </thead>
                    <tbody>
                        <td><input id="grade-input-funcionalidade-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id})"></td>
                        <td><input id="grade-input-estilo-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id});"></td>
                        <td><input id="grade-input-critatividade-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id});"></td>
                    </tbody>
                </table>
            </div>
            <div class="item-final-grade-wrapper">
                <h2>Média</h2>
                <span id="item-final-grade-${item.id}" class="item-final-grade">NOTA</span>
            </div>
        </div>
        `;
        });
    }
}
render(exercises);
//calcMedia(6,6,7);
