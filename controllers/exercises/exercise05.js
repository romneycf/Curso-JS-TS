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
function fetchRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch(`https://receitas-server.vercel.app/api`);
        return request.json();
    });
}
function handleRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const inputRecipeFilter = document.querySelector("#input-recipe-filter");
        inputRecipeFilter.value = '';
        //TENTAR IMPLEMENTAR LOADING COM TRY CATCH
        const response = yield fetchRecipes();
        const splice = response.splice(0, 20);
        renderRecipes(splice);
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
function handleRecipesfilter() {
    return __awaiter(this, void 0, void 0, function* () {
        const inputRecipeFilter = document.querySelector("#input-recipe-filter");
        const inputFilterValue = inputRecipeFilter.value.toLowerCase().split(",");
        if (inputFilterValue) {
            const filteredRecipes = yield filterRecipes(inputFilterValue);
            renderRecipes(filteredRecipes);
        }
    });
}
// async function paginatedItems(items: Recipe[], page:number){
//     const items_per_page = 20;
//     const paginatedItems = items.splice(0, items_per_page)
// }
function renderRecipes(Recipes) {
    return __awaiter(this, void 0, void 0, function* () {
        const recipesContainer = document.querySelector("#recipes-container");
        if (recipesContainer) {
            recipesContainer.innerHTML = "";
            //CODAR LOGICA DE PAGINADOR AQUI DENTRO( RECIPES JÁ VAI ESTAR FILTRADO, FAZER UMA LOGICA PRA POUCOS RESULTADOS NÃO TER PG)
            Recipes.forEach((item) => {
                recipesContainer.innerHTML += `
        <div class="recipe-card">
            <div class="recipe-card-info">
                <h1 class="recipe-title">'${item.Name}'</h1>
                <img class="recipe-img" src='${item.urlImage}'>
            </div>
        </div>
        <div class="modal-window" onclick="modalClose()" style="display: none;">
            <p class="recipe-desc">'${item.Ingredients}'</p>
            <a class="view-btn" href='${item.url}'>VER RECEITA</a>
        </div>
        `;
            });
        }
    });
}
function renderExercise05() {
    if (rootElementExercise05) {
        rootElementExercise05.innerHTML = "";
        rootElementExercise05.innerHTML += `
        <div id="header">
            <h1>My Cook Book</h1>
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
            <div id="aside">
                <h1>ASIDE</h1>
            </div>
            <div id="recipes-container"></div>
        </div>
        <div id="footer">
            <h1>FOOTER</h1>
        </div>
        `;
    }
}
renderExercise05();
