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

/*  Faça uma função que aceite um parametro, 
    sendo esse o nome de uma categoria, 
    e essa funcao deve retornar um novo array 
    com itens apenas que tem a categoria passada como parametro.
*/

function arrayFilter(filter: string) {
    const newList = [...itemsList];
    const filteredList = newList.filter((item) => {
        if (item.categoria === filter) return true;
        return false;
    });
    return filteredList
}
console.log(arrayFilter("blusa"));


/*  Faça uma função que retorne um array, 
    com arrays dentro (matriz) que contenham a sequencia de numeros de 1 a 27,
    separados por 3 em cada array interno. Exemplo: [[1,2,3],[4,5,6],[7,8,9]], até 27.
*/

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
console.log(arrayAgroup(27,3));

/*  Faça uma função que retorna o array que é resultado do exercício acima,
    só que ao invés de grupos de 3, vai retornar em cada array interno,
    a soma dos itens. Exemplo:  [[6],[15]...]
*/

const threeAgroupedArray = arrayAgroup(27, 3);

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
console.log(sumArrayNumbers(threeAgroupedArray));
/*-------------------------------------------------------------------------------------------------------------------------------*/