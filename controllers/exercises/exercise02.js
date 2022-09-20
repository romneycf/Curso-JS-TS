"use strict";
const rootElementExercise02 = document.querySelector("#root");
const itemsList = [
    {
        id: 1,
        modelo: "blusa do naruto",
        marca: "lacosta",
        categoria: "blusa",
    },
    {
        id: 2,
        modelo: "bermuda do naruto",
        marca: "lacosta",
        categoria: "bermuda",
    },
    {
        id: 3,
        modelo: "bandana do naruto",
        marca: "lacosta",
        categoria: "acessorios",
    },
];
function arrayFilter(filter) {
    const newList = [...itemsList];
    const filteredList = newList.filter((item) => {
        if (item.categoria === filter)
            return true;
        return false;
    });
    return filteredList;
}
function handleArrayfilter() {
    const filter = document.getElementById('selectFilter').value;
    const resposta = arrayFilter(filter);
    document.getElementById('resposta01').value = JSON.stringify(resposta);
}
function arrayAgroup(arraySize, agroupQuantitiy) {
    let parameterArray = [];
    for (let i = 1; i <= arraySize; i++) {
        parameterArray.push(i);
    }
    let agroupedArray = [];
    for (let i = 0, k = -1; i < parameterArray.length; i++) {
        if (i % agroupQuantitiy === 0) {
            k++;
            agroupedArray[k] = [];
        }
        agroupedArray[k].push(parameterArray[i]);
    }
    return agroupedArray;
}
function handleArrayagroup() {
    const arraysize = document.getElementById('input03').value;
    const agroup = document.getElementById('input04').value;
    const resposta = arrayAgroup(Number(arraysize), Number(agroup));
    document.getElementById('resposta02').value = JSON.stringify(resposta);
    document.getElementById('arrayInput').value = JSON.stringify(resposta);
}
function sumArrayNumbers(matrix) {
    const newArray = [...matrix];
    return newArray.map((array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return [sum];
    });
}
function handleSumarraynumbers() {
    const arraysize = document.getElementById('input03').value;
    const agroup = document.getElementById('input04').value;
    const matrix = arrayAgroup(Number(arraysize), Number(agroup));
    const resposta = sumArrayNumbers(matrix);
    document.getElementById('resposta03').value = JSON.stringify(resposta);
}
function renderExercise02() {
    if (rootElementExercise02) {
        rootElementExercise02.innerHTML += `
        <div class="item-wrapper">
            <h3>
                Para os exercícios a seguir considere o array abaixo:<br />
                itemsList = [
                { id: 1, modelo: "blusa do naruto", marca: "lacosta", categoria: "blusa",
                },
                { id: 2, modelo: "bermuda do naruto", marca: "lacosta", categoria:
                "bermuda", },
                { id: 3, modelo: "bandana do naruto", marca: "lacosta", categoria:
                "acessorios", }
                ]
            </h3>
            <div class="exercise01">
                <h3>
                    1- Faça uma função que aceite um parametro, <b> sendo esse o nome de uma categoria</b> e essa funcao deve retornar um novo array com itens apenas que tem a categoria passada como parametro.
                </h3>
                <div>
                    <select id="selectFilter">
                        <option>blusa</option>
                        <option>bermuda</option>
                        <option>acessorios</option>
                    </select>
                    <button onclick="handleArrayfilter()">Filtrar</button>
                </div>
                <div>
                    <textarea id="resposta01" class="area-answer" placeholder="Resposta01" disabled></textarea>
                </div>
                <hr>
            </div>
            <div class="exercise02">
                <h3>
                    2- Faça uma função que retorne um array, com arrays dentro (matriz) que contenham a sequencia de numeros de 1 a 27, separados por 3 em cada array interno. Exemplo: [[1,2,3],[4,5,6],[7,8,9]], até 27..
                </h3>
                <div>
                    <input type="number" id="input03" placeholder="Tamanho do Array"/>
                    <input type="number" id="input04" placeholder="Agrupar em"/>
                    <button onclick="handleArrayagroup()">Agrupar</button>
                    </div>
                    <div>
                        <textarea id="resposta02" class="area-answer" placeholder="Resposta02" disabled></textarea>
                    </div>
                <hr>
            </div>
            <div class="exercise03">
                <h3>
                    3- Faça uma função que retorna o array que é <b>resultado do exercício acima</b>, só que ao invés de grupos de 3, vai retornar em cada array interno, a soma dos itens. Exemplo: [[6],[15]...]
                </h3>
                <div>
                    <div>
                        <textarea id="arrayInput" class="area-answer" disabled></textarea>
                    </div>
                    <button onclick="handleSumarraynumbers()">Somar</button>
                    <div>
                        <textarea id="resposta03" class="area-answer" disabled placeholder="Resposta03"></textarea>
                    </div>
                    <hr>
                </div>
            </div>
            <div>
                <a class="a-button" href="../../index.html">Voltar</a>
            </div>
        </div>
        `;
    }
}
renderExercise02();
