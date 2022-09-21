const rootElementExercise03 = document.querySelector("#root");
const checkboxCategoria = document.querySelector("#checkbox-filtro-categoria");
const inputFiltroCategoria = document.querySelector("#input-filtro-categoria");
const selectFiltroTamanho = document.querySelector("#select-filtro-tamanho");
const selectFiltroPreco = document.querySelector("#select-filtro-preco");
const checkboxCor = document.querySelector("#checkbox-filtro-cor");
const inputFiltroCor1 = document.querySelector("#input-filtro-cor1");
const inputFiltroCor2 = document.querySelector("#input-filtro-cor2");
const audios = document.querySelectorAll('audio');



type Blusa = { id: number; marca: string; modelo: string; preco: number; imageUrl: string; tamanho: string; cores: string[]; categoria: string };
type Figura = { id: number; nome: string; raridade: string; categoria: string; preco: number; cores: string[]; img_caminho: string; }

const blusas: Blusa[] = [
    { id: 1, marca: "lacosta", modelo: "blusa do naruto", preco: 3.5, tamanho: "P", cores: ["amarelo", "preto", "vermelho"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_627789-MLB46515960810_062021-W.jpg' },
    { id: 2, marca: "lafrente", modelo: "Casaco do one piece", preco: 7.0, tamanho: "G", cores: ["branco", "preto", "amarelo"], categoria: "casaco", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_725801-MLB44062191039_112020-F.webp' },
    { id: 311, marca: "ardidas", modelo: "blusa do tokyo ghoul", preco: 12.5, tamanho: "M", cores: ["preto", "branco", "vermelho"], categoria: "blusa", imageUrl: 'https://img.elo7.com.br/product/zoom/1CA16D8/camiseta-tokyo-ghoul-kaneki-camiseta.jpg' },
    { id: 4, marca: "puma", modelo: "blusa do jujutsu no kaizen", preco: 12.99, tamanho: "G", cores: ["preto", "branco", "azul", "verde"], categoria: "camisa", imageUrl: 'https://www.streetanime.com.br/arquivos/PRODUTOS/3501619183158948393/1_GG_Camisa-Jujutsu-Kaisen-Yuji-Megumi-Nobara-Sat.jpg' },
    { id: 5, marca: "calvo cleide", modelo: "blusa do kimetsu no yaiba", preco: 32.99, tamanho: "M", cores: ["branco", "verde", "preto"], categoria: "camisa", imageUrl: 'https://cf.shopee.com.br/file/238ed9ae75bc8490cb57eee1ed352c2e' },
    { id: 6, marca: "pia", modelo: "blusa do boruto", preco: 1.99, tamanho: "G", cores: ["preto", "amarelo", "azul"], categoria: "blusa", imageUrl: 'https://cf.shopee.com.br/file/97284bb98b6c4805e43b2c1903d5db08' },
    { id: 21, marca: "cavalera", modelo: "blusa do cavalo de fogo", preco: 8.99, tamanho: "GG", cores: ["branco", "roxo", "vermelho"], categoria: "blusa", imageUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/186/674/products/camiseta-cinza-cavalo-de-fogo-nostalgia-desenho-animado-anos-70-80-90-16301-f2bcfc1253b9608e3915709119586563-640-0.jpg' },
    { id: 123, marca: "reserva", modelo: "blusa do cavalo de fogo azul", preco: 25.99, tamanho: "G", cores: ["azul", "branco", "vermelho", "preto"], categoria: "blusa", imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_768880-MLB46470593884_062021-O.jpg' },
];

const figuras: Figura[] = [
    { id: 1, nome:"Alucard e Jesus" , raridade: "rare", categoria: "eventos", preco: 33.33, cores: ["amarelo", "preto", "azul"], img_caminho: '../../img/figures/alucard_and_jesus.png' },
    { id: 2, nome:"Dark Mode" , raridade: "common", categoria: "dark", preco: 666.66, cores: ["preto", "marrom"], img_caminho: '../../img/figures/dark_mode.png' },
    { id: 3, nome:"Default" , raridade: "common", categoria: "cartoon", preco: 0.45, cores: ["rosa", "preto"], img_caminho: '../../img/figures/default_cartoon.png' },
    { id: 4, nome:"Environmental Friendly" , raridade: "epic", categoria: "eventos", preco: 1350.00, cores: ["verde"], img_caminho: '../../img/figures/environmental_friendly.png' },
    { id: 5, nome:"Gothic" , raridade: "epic", categoria: "dark", preco: 1024.00, cores: ["preto", "azul"], img_caminho: '../../img/figures/gothic.png' },
    { id: 6, nome:"Greater than Infinity" , raridade: "legendary", categoria: "eventos", preco: 7500.00, cores: ["roxo", "azul"], img_caminho: '../../img/figures/greater_than_infinity_cartoon.png' },
    { id: 7, nome:"MarioKart" , raridade: "common", categoria: "gaymer", preco: 64.00, cores: ["cinza", "vermelho", "verde", "amarelo", "azul"], img_caminho: '../../img/figures/kart_fagner.png' },
    { id: 8, nome:"Low Carb" , raridade: "epic", categoria: "eventos", preco: 2600.00, cores: ["azul", "cinza"], img_caminho: '../../img/figures/low_carb.png' },
    { id: 9, nome:"Modern Thinker" , raridade: "legendary", categoria: "cartoon", preco: 5500.00, cores: ["cinza"], img_caminho: '../../img/figures/modern_thinker_cartoon.png' },
    { id: 10, nome:"Origins" , raridade: "legendary", categoria: "eventos", preco: 4100.00, cores: ["vermelho", "preto", "amareloo"], img_caminho: '../../img/figures/origins.png' },
    { id: 11, nome:"Dreams" , raridade: "common", categoria: "quote", preco: 0.17, cores: ["branco", "verde"], img_caminho: '../../img/figures/quote1.png' },
    { id: 12, nome:"Fear" , raridade: "common", categoria: "quote", preco: 0.99, cores: ["rosa", "branco"], img_caminho: '../../img/figures/quote2.png' },
    { id: 13, nome:"Tears" , raridade: "common", categoria: "quote", preco: 1.15, cores: ["roxo", "branco"], img_caminho: '../../img/figures/quote3.png' },
    { id: 14, nome:"Ready Mode" , raridade: "golden legendary", categoria: "eventos", preco: 9999.99, cores: ["cinza", "marrom"], img_caminho: '../../img/figures/ready_mode.png' },
    { id: 15, nome:"Sexy" , raridade: "rare", categoria: "cartoon", preco: 220.00, cores: ["vermelho", "preto"], img_caminho: '../../img/figures/sexy_cartoon.png' },
    { id: 16, nome:"Smile" , raridade: "rare", categoria: "cartoon", preco: 180.00, cores: ["cinza", "preto"], img_caminho: '../../img/figures/smile_cartoon.png' },
    { id: 17, nome:"Sunglasses" , raridade: "epic", categoria: "cartoon", preco: 110.00, cores: ["cinza", "preto"], img_caminho: '../../img/figures/sunglasses_cartoon.png' },
    { id: 18, nome:"Xmas" , raridade: "rare", categoria: "eventos", preco: 25.12, cores: ["vermelho", "azul"], img_caminho: '../../img/figures/xmas_mode.png' },
];

function playRarity(rarity: number){
    audios[rarity].play();
}
playRarity(2);

function renderExercise03(itens: Figura[]) {
    if (rootElementExercise03) {
        rootElementExercise03.innerHTML = "";
        itens.forEach((item) => {
            rootElementExercise03.innerHTML += `
        <div class="item-wrapper">
            <div class="item-name">
              <h2>${item.nome}</h2>
            </div>
            <div class="item-image">
              <img id="imagem-${item.id}" class="imagem-produto" src="${item.img_caminho}" />
            </div>
            <div class="item-info">
              <h3>${item.raridade}</h3>
              <h4>${item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
            </div>
              <div>
                  <a class="a-button" href="../../index.html">Voltar</a>
              </div>
        </div>
        `;
        });
    }
}

function scaleFontSize() {
    const nomeProdutos = document.getElementsByTagName('h2');

    for (let i = 0; i < nomeProdutos.length; i++) {

        if (nomeProdutos[i].innerHTML.length > 30) {
            nomeProdutos[i].style.fontSize = '22px';
        }
        if (nomeProdutos[i].innerHTML.length > 100) {
            nomeProdutos[i].style.fontSize = '18px';
        }
        if (nomeProdutos[i].innerHTML.length > 150) {
            nomeProdutos[i].style.fontSize = '15px';
        }
        if (nomeProdutos[i].innerHTML.length > 160) {
            // console.log(nomeProdutos[i].innerHTML )
            const textoLimitado = nomeProdutos[i].innerHTML.substring(0, 160) + '...';
            // console.log(textoLimitado);
            nomeProdutos[i].innerText = textoLimitado;
        }
    }
}

function filtraCategoria(arrayDeBlusas: Blusa[] = blusas) {
    const checkboxCategoriaChecked = (checkboxCategoria as HTMLInputElement).checked;
    let newBlusas: Blusa[] = arrayDeBlusas;
    if (checkboxCategoriaChecked) {
        const inputFiltroCategoriaValue = (inputFiltroCategoria as HTMLInputElement).value.toLowerCase();
        console.log(inputFiltroCategoriaValue);
        newBlusas = newBlusas.filter((blusa) => blusa['categoria'].includes(inputFiltroCategoriaValue));

    }
    return newBlusas;
}

function filtraTamanho(arrayDeBlusas: Blusa[] = blusas) {
    const selectFiltroTamanhoValue = (selectFiltroTamanho as HTMLSelectElement).value;
    let newBlusas: Blusa[] = arrayDeBlusas;
    if (selectFiltroTamanhoValue !== 'Todos') {
        newBlusas = newBlusas.filter((blusa) => blusa['tamanho'].includes(selectFiltroTamanhoValue));

    }
    return newBlusas;
}
function filtraPreco(arrayDeBlusas: Blusa[] = blusas) {
    const selectFiltroPrecoValue = (selectFiltroPreco as HTMLSelectElement).value;
    let newBlusas: Blusa[] = arrayDeBlusas;
    if (selectFiltroPrecoValue === 'crescente') {
        newBlusas = newBlusas.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0);
    }

    if (selectFiltroPrecoValue === 'decrescente') {
        newBlusas = newBlusas.sort((a, b) => a.preco > b.preco ? -1 : a.preco < b.preco ? 1 : 0);
    }
    return newBlusas;
}

function filtraCor(arrayDeBlusas: Blusa[] = blusas) {
    const checkboxCorChecked = (checkboxCor as HTMLInputElement).checked;
    let newBlusas = arrayDeBlusas;
    if (checkboxCorChecked) {
        const inputFiltroCor1Value = (inputFiltroCor1 as HTMLInputElement).value.toLowerCase();
        if (inputFiltroCor1Value !== '') {
            newBlusas = newBlusas.filter((blusa) => {
                let flag = false;
                blusa['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor1Value)) flag = true;
                })
                return flag;
            });

        }
        console.log(newBlusas);
        const inputFiltroCor2Value = (inputFiltroCor2 as HTMLInputElement).value.toLowerCase();
        if (inputFiltroCor2Value !== '') {
            newBlusas = newBlusas.filter((blusa) => {
                let flag = false;
                blusa['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor2Value)) flag = true;
                })
                return flag;
            });

        }
        console.log(newBlusas);
    }
    return newBlusas;
}

function aplicaFiltros() {
    let newBlusas = filtraCategoria();
    newBlusas = filtraTamanho(newBlusas);
    newBlusas = filtraPreco(newBlusas);
    newBlusas = filtraCor(newBlusas);
    renderExercise03(newBlusas);
    scaleFontSize();

}

function eventListenerHandleInputCategoria() {
    (inputFiltroCategoria as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCategoria() {
    (checkboxCategoria as HTMLInputElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectTamanho() {
    (selectFiltroTamanho as HTMLSelectElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleSelectPreco() {
    (selectFiltroPreco as HTMLSelectElement).addEventListener("change", aplicaFiltros);
}
function eventListenerHandleInputCor1() {
    (inputFiltroCor1 as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleInputCor2() {
    (inputFiltroCor2 as HTMLInputElement)?.addEventListener("keyup", aplicaFiltros);
}
function eventListenerHandleCheckboxCor() {
    (checkboxCor as HTMLInputElement).addEventListener("change", aplicaFiltros);
}

renderExercise03(figuras);
eventListenerHandleInputCategoria();
eventListenerHandleCheckboxCategoria();
eventListenerHandleSelectTamanho();
eventListenerHandleSelectPreco();
eventListenerHandleCheckboxCor();
eventListenerHandleInputCor1();
eventListenerHandleInputCor2();
scaleFontSize();

