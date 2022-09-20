"use strict";
/*-------------------------------------------------------------------------------------------------------------------------------*/
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
    console.log(matrix);
    const resposta = sumArrayNumbers(matrix);
    document.getElementById('resposta03').value = JSON.stringify(resposta);
}
// const teste = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20,21],[22,23,24],[25,26,27]];
// console.log(sumArrayNumbers(teste));
