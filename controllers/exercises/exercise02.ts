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

function arrayFilter(filter: string) {
    const newList = [...itemsList];
    const filteredList = newList.filter((item) => {
        if (item.categoria === filter) return true;
        return false;
    });
    return filteredList
}

function handleArrayfilter(){
    const filter =  (<HTMLInputElement>document.getElementById('selectFilter')).value;
    const resposta = arrayFilter(filter);
    (<HTMLInputElement>document.getElementById('resposta01')).value = JSON.stringify(resposta);
}

function arrayAgroup(arraySize: number, agroupQuantitiy: number) {
    let parameterArray: number[] = [];
    for (let i = 1; i <= arraySize; i++) {
        parameterArray.push(i);
    }
    let agroupedArray: number[][] = [];
    for (let i = 0, k = -1; i < parameterArray.length; i++) {
        if (i % agroupQuantitiy === 0) {
            k++;
            agroupedArray[k] = [];
        }
        agroupedArray[k].push(parameterArray[i]);
    }
    return agroupedArray;
}

function handleArrayagroup(){
    const arraysize =  (<HTMLInputElement>document.getElementById('input03')).value;
    const agroup =  (<HTMLInputElement>document.getElementById('input04')).value;
    const resposta = arrayAgroup(Number(arraysize), Number(agroup));
    (<HTMLInputElement>document.getElementById('resposta02')).value = JSON.stringify(resposta);
    (<HTMLInputElement>document.getElementById('arrayInput')).value = JSON.stringify(resposta);
}

function sumArrayNumbers(matrix: number[][]) {
    const newArray: number[][] = [...matrix];
    return newArray.map((array) => {
        let sum: number = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return [sum];
    });
}

function handleSumarraynumbers(){
    const arraysize =  (<HTMLInputElement>document.getElementById('input03')).value;
    const agroup =  (<HTMLInputElement>document.getElementById('input04')).value;
    const matrix = arrayAgroup(Number(arraysize), Number(agroup));
    console.log(matrix);
    const resposta = sumArrayNumbers(matrix);
    (<HTMLInputElement>document.getElementById('resposta03')).value = JSON.stringify(resposta);
}
// const teste = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20,21],[22,23,24],[25,26,27]];
// console.log(sumArrayNumbers(teste));