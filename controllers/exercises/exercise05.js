"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const rootElementExercise05 = document.querySelector("#root");
const inputRecipeFilter = document.querySelector("#input-recipe-filter");
const authors = [
    { id: 1, nome: "Jair Messias", img_caminho: '../../img/authors/JM.png' },
    { id: 2, nome: "Carlos Bolso", img_caminho: '../../img/authors/SC.png' },
    { id: 3, nome: "Barbinha", img_caminho: '../../img/authors/BR.png' },
    { id: 4, nome: "Luiz Inácio", img_caminho: '../../img/authors/YB.png' }
];
function fetchRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch(`https://receitas-server.vercel.app/api`);
        return request.json();
    });
}
function handleRecipes(itemsPerPage = 20, initalItem = 0, finalItem = 20) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputRecipeFilter = document.querySelector("#input-recipe-filter");
        const inputFilterValue = inputRecipeFilter.value.toLowerCase();
        //TENTAR IMPLEMENTAR LOADING COM TRY CATCH
        const response = yield fetchRecipes();
        const filteredRecipes = response; //CODAR FILTRO AQUI
        if (filteredRecipes.length > itemsPerPage) {
            return renderRecipes(filteredRecipes, itemsPerPage, initalItem, finalItem);
        }
        renderRecipes(filteredRecipes);
    });
}
function filterRecipes(filters) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchRecipes();
        // const filteredRecipes = response.filter((Recipe, index) => Recipe['Ingredients'].some(filters));
        const filteredRecipes = response.splice(0, 2).filter((Recipe) => {
            Recipe['Ingredients'].forEach((e) => {
                console.log(e);
                console.log(filters);
                if (e.includes(filters)) {
                    return true;
                }
            });
        });
        return filteredRecipes;
    });
}
// async function handleRecipesfilter() {
//     const inputRecipeFilter = document.querySelector("#input-recipe-filter");
//     const inputFilterValue = (inputRecipeFilter as HTMLInputElement).value.toLowerCase().split(",");
//     if (inputFilterValue) {
//         const filteredRecipes = await filterRecipes(inputFilterValue);
//         renderRecipes(filteredRecipes);
//     }
// }
// async function paginatedItems(items: Recipe[], page:number){
//     const items_per_page = 20;
//     const paginatedItems = items.splice(0, items_per_page)
// }
// function handlePaginator(Recipes: Recipe[], itemsPerPage = 20,  pageNumber = 0){
//     const arrayLength = Recipes.length;
//     var splicedRecipe = Recipes;
//     splicedRecipe = Recipes.splice(pageNumber, itemsPerPage);
//     return splicedRecipe;
// }
function btback5() {
    return window.location.href = '../../index.html';
}
function modalRecipeOpen(url) {
    return window.location.href = "#open-modal-" + url;
}
function modalRecipeClose() {
    return window.location.href = "#";
}
// function recipesSplice(Recipes: Recipe[], initialItem: number, finalItem: number){
//     const splicedRecipe = Recipes.splice(initialItem, finalItem);
//     renderRecipes(Recipes, splicedRecipe);
// }
function handleSelectPaginator() {
    const selectItemsPerPage = document.querySelector("#select-items-per-page");
    const selectItemsPerPageValue = parseInt(selectItemsPerPage.value);
    handleRecipes(selectItemsPerPageValue, 0, selectItemsPerPageValue);
}
function renderRecipes(Recipes, itemsPerPage = 20, initalItem = 0, finalItem = 20) {
    const recipesContainer = document.querySelector("#recipes-container");
    const paginatorContainer = document.querySelector("#paginator-container");
    var renderedRecipes = Recipes;
    console.log(Recipes.length);
    //CODAR LOGICA DE PAGINADOR AQUI DENTRO( RECIPES JÁ VAI ESTAR FILTRADO, FAZER UMA LOGICA PRA POUCOS RESULTADOS NÃO TER PG)
    if (Recipes.length > itemsPerPage) {
        renderedRecipes = Recipes.splice(initalItem, finalItem);
        if (paginatorContainer) {
            paginatorContainer.innerHTML = "";
            paginatorContainer.innerHTML += `
            <button onclick="${initalItem} === 0 ? null : handleRecipes(${itemsPerPage}, ${initalItem - (itemsPerPage + 1)}, ${finalItem - (itemsPerPage + 1)})"><</button>
            <select id="select-items-per-page" onchange="handleSelectPaginator()">
                <option value=20>20</option>
                <option value=50>50</option>
                <option value=100>100</option>
            </select>
            <button onclick="${(Recipes.length)} === ${finalItem}? null : handleRecipes(${itemsPerPage}, ${finalItem + 1}, ${finalItem + itemsPerPage + 1})">></button>
            `;
        }
    }
    if (recipesContainer) {
        recipesContainer.innerHTML = "";
        renderedRecipes.forEach((item) => {
            recipesContainer.innerHTML += `
        <div class="recipe-card" onclick="modalRecipeOpen('${item.url}')">
            <div class="recipe-card-info">
                <h1 class="recipe-title">'${item.Name}'</h1>
                <img class="recipe-img" src='${item.urlImage}'>
            </div>
        </div>
        <div id="open-modal-${item.url}" class="modal-window" onclick="modalRecipeClose()">
            <div>
                <h1 class="recipe-title">'${item.Name}'</h1>
                <p class="recipe-desc">'${item.Ingredients}'</p>
                <a class="view-btn" href='${item.url}'>VER RECEITA</a>
            </div>
        </div>
        `;
        });
    }
}
function renderExercise05(bestAuthors) {
    if (rootElementExercise05) {
        rootElementExercise05.innerHTML = "";
        rootElementExercise05.innerHTML += `
        <div id="header">
            <h1>My Cock Book</h1>
            <div id="best-authors-wrapper">
                <div class="author-div">
                    <img class="author-img" src='${bestAuthors[0].img_caminho}'>
                    <span class="name">${bestAuthors[0].nome}</span>
                </div>
                <div class="author-div">
                    <img class="author-img" src='${bestAuthors[1].img_caminho}'>
                    <span class="name">${bestAuthors[1].nome}</span>
                </div>
                <div class="author-div">
                    <img class="author-img" src='${bestAuthors[2].img_caminho}'>
                    <span class="name">${bestAuthors[2].nome}</span>
                </div>
                <div class="author-div">
                    <img class="author-img" src='${bestAuthors[3].img_caminho}'>
                    <span class="name">${bestAuthors[3].nome}</span>
                </div>
            </div>
        </div>
        <div id="input-wrapper">
            <input id="input-recipe-filter"></input>
            <select id="select-recipe-filter">
                <option>Author</option>
                <option>Description</option>
                <option>Ingredients</option>
                <option>Method</option>
            </select>
            <button onclick="handleRecipesfilter()"><i class="fa-solid fa-search"></i></button>
            <button onclick="handleRecipes()"><i class="fa-solid fa-rotate"></i></button>
        </div>
        <div id="main">
            <div id="main-upper">
                <div id="paginator-container"></div>
            </div>
            <div id="main-center">
                <div id="recipes-container"></div>
            </div>
        </div>
        <div id="footer">
            <h1>FOOTER</h1>
            <div class="neon-button">
                <button class="btn btn-neon" id="back-button" onclick="btback5()"><i class="fa-solid fa-arrow-left"></i></button>
            </div>
        </div>
        `;
    }
}
renderExercise05(authors);
