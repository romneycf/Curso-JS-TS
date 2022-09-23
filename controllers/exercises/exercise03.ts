const rootElementExercise03 = document.querySelector("#root");
const selectRarityFilter = document.querySelector("#select-rarity-filter");
const selectPriceOrder = document.querySelector("#select-price-order");
const applyFilterButton = document.querySelector("#apply-filter-button");
const inputCategoryFilter = document.querySelector("#input-category-filter");
const inputFiltroCor1 = document.querySelector("#input-filtro-cor1");
const inputFiltroCor2 = document.querySelector("#input-filtro-cor2");
const audios = document.querySelectorAll('audio');


type Figura = { id: number; nome: string; raridade: string; categoria: string; preco: number; cores: string[]; img_caminho: string; }

const figuras: Figura[] = [
    { id: 1, nome: "Alucard e Jesus", raridade: "rare", categoria: "eventos", preco: 33.33, cores: ["amarelo", "preto", "azul"], img_caminho: '../../img/figures/alucard_and_jesus.png' },
    { id: 2, nome: "Dark Mode", raridade: "common", categoria: "dark", preco: 666.66, cores: ["preto", "marrom"], img_caminho: '../../img/figures/dark_mode.png' },
    { id: 3, nome: "Default", raridade: "common", categoria: "cartoon", preco: 0.45, cores: ["rosa", "preto"], img_caminho: '../../img/figures/default_cartoon.png' },
    { id: 4, nome: "Environmental Friendly", raridade: "epic", categoria: "eventos", preco: 1350.00, cores: ["verde"], img_caminho: '../../img/figures/environmental_friendly.png' },
    { id: 5, nome: "Gothic", raridade: "epic", categoria: "dark", preco: 1024.00, cores: ["preto", "azul"], img_caminho: '../../img/figures/gothic.png' },
    { id: 6, nome: "Greater than Infinity", raridade: "legendary", categoria: "eventos", preco: 7500.00, cores: ["roxo", "azul"], img_caminho: '../../img/figures/greater_than_infinity_cartoon.png' },
    { id: 7, nome: "MarioKart", raridade: "common", categoria: "gaymer", preco: 64.00, cores: ["cinza", "vermelho", "verde", "amarelo", "azul"], img_caminho: '../../img/figures/kart_fagner.png' },
    { id: 8, nome: "Low Carb", raridade: "epic", categoria: "eventos", preco: 2600.00, cores: ["azul", "cinza"], img_caminho: '../../img/figures/low_carb.png' },
    { id: 9, nome: "Modern Thinker", raridade: "legendary", categoria: "cartoon", preco: 5500.00, cores: ["cinza"], img_caminho: '../../img/figures/modern_thinker_cartoon.png' },
    { id: 10, nome: "Origins", raridade: "legendary", categoria: "eventos", preco: 4100.00, cores: ["vermelho", "preto", "amareloo"], img_caminho: '../../img/figures/origins.png' },
    { id: 11, nome: "Dreams", raridade: "common", categoria: "quote", preco: 0.17, cores: ["branco", "verde"], img_caminho: '../../img/figures/quote1.png' },
    { id: 12, nome: "Fear", raridade: "common", categoria: "quote", preco: 0.99, cores: ["rosa", "branco"], img_caminho: '../../img/figures/quote2.png' },
    { id: 13, nome: "Tears", raridade: "common", categoria: "quote", preco: 1.15, cores: ["roxo", "branco"], img_caminho: '../../img/figures/quote3.png' },
    { id: 14, nome: "Ready Mode", raridade: "golden-legendary", categoria: "eventos", preco: 9999.99, cores: ["cinza", "marrom"], img_caminho: '../../img/figures/ready_mode.png' },
    { id: 15, nome: "Sexy", raridade: "rare", categoria: "cartoon", preco: 220.00, cores: ["vermelho", "preto"], img_caminho: '../../img/figures/sexy_cartoon.png' },
    { id: 16, nome: "Smile", raridade: "rare", categoria: "cartoon", preco: 180.00, cores: ["cinza", "preto"], img_caminho: '../../img/figures/smile_cartoon.png' },
    { id: 17, nome: "Sunglasses", raridade: "epic", categoria: "cartoon", preco: 110.00, cores: ["cinza", "preto"], img_caminho: '../../img/figures/sunglasses_cartoon.png' },
    { id: 18, nome: "Xmas", raridade: "rare", categoria: "eventos", preco: 25.12, cores: ["vermelho", "azul"], img_caminho: '../../img/figures/xmas_mode.png' },
];

function playRarity(rarity: string) {
    switch (rarity) {
        case 'rare':
            var audio = 0
            audios[audio].play();
            break;
        case 'epic':
            var audio = 1
            audios[audio].play();
            break;
        case 'legendary':
            var audio = 2
            audios[audio].play();
            break;
        case 'golden-legendary':
            var audio = 3
            audios[audio].play();
            break;
        default:
            null 
            break;
    }
}

function categoryFilter(figuresArray: Figura[] = figuras) {
    let newFigures: Figura[] = figuresArray;
    if (inputCategoryFilter) {
        const inputCategoryFilterValue = (inputCategoryFilter as HTMLInputElement).value.toLowerCase();
        newFigures = newFigures.filter((figures) => figures['categoria'].includes(inputCategoryFilterValue));
    }
    return newFigures;
}

function rarityFilter(figuresArray: Figura[] = figuras) {
    const selectRarityFilterValue = (selectRarityFilter as HTMLSelectElement).value;
    let newFigures: Figura[] = figuresArray;
    if (selectRarityFilterValue !== 'All') {
        newFigures = newFigures.filter((figures) => {
            return figures.raridade === (selectRarityFilterValue) ? true : false});
    }
    return newFigures;
}

function priceFilter(figuresArray: Figura[] = figuras) {
    const selectPriceOrderValue = (selectPriceOrder as HTMLSelectElement).value;
    let newFigures: Figura[] = figuresArray;
    if (selectPriceOrderValue === 'crescente') {
        newFigures = newFigures.sort((a, b) => a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0);
    }
    if (selectPriceOrderValue === 'decrescente') {
        newFigures = newFigures.sort((a, b) => a.preco > b.preco ? -1 : a.preco < b.preco ? 1 : 0);
    }
    return newFigures;
}

function colorFilter(figuresArray: Figura[] = figuras) {
    let newFigures = figuresArray;
    if (inputFiltroCor1 || inputFiltroCor2) {//mudar pra if interno com cor 2
        const inputFiltroCor1Value = (inputFiltroCor1 as HTMLInputElement).value.toLowerCase();
        if (inputFiltroCor1Value !== '') {
            newFigures = newFigures.filter((figures) => {
                let flag = false;
                figures['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor1Value)) flag = true;
                })
                return flag;
            });
        }
        const inputFiltroCor2Value = (inputFiltroCor2 as HTMLInputElement).value.toLowerCase();
        if (inputFiltroCor2Value !== '') {
            newFigures = newFigures.filter((figures) => {
                let flag = false;
                figures['cores'].forEach((e) => {
                    if (e.includes(inputFiltroCor2Value)) flag = true;
                })
                return flag;
            });
        }
    }
    return newFigures;
}

function applyFilters() {
    let newFigures = categoryFilter(figuras);
    newFigures = rarityFilter(newFigures);
    newFigures = priceFilter(newFigures);
    newFigures = colorFilter(newFigures);
    renderExercise03(newFigures);
}

function renderExercise03(itens: Figura[]) {
    if (rootElementExercise03) {
        rootElementExercise03.innerHTML = "";
        itens.forEach((item) => {
            rootElementExercise03.innerHTML += `
        <div class="card-container" onmouseover="playRarity('${item.raridade}')">
            <div class="card-inner">
                <div id="card-${item.raridade}" class="card-back">
                    <img class="card-back-img" src="../../img/card-back.png" />
                </div>
                <div class="card-face">
                    <div class="card-name">
                        <h2>${item.nome}</h2>
                    </div>
                    <div class="card-image">
                        <img id="img-${item.id}" class="card-img" src="${item.img_caminho}" />
                    </div>
                    <div class="card-info">
                        <h3>${item.raridade}</h3>
                        <h4>${item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                    </div>
                </div>
            </div>
        </div>
        `;
        });
    }
}

renderExercise03(figuras);