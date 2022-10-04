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
        const response = yield request.json();
        console.log(response);
        return response;
    });
}
function handleRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const recipesResponse = yield fetchRecipes();
        console.log(recipesResponse);
        renderRecipes(recipesResponse);
    });
}
function renderRecipes(response) {
    const answer01div = document.querySelector("#recipes-container");
    if (answer01div) {
        answer01div.innerHTML = "";
        response.forEach((item) => {
            answer01div.innerHTML += `
        <div className="recipe-card">
        <div className="recipe-card-info">
            <p className="recipe-title">'${item.Name}'</p>
            <p className="recipe-desc">'${item.Description}'</p>
            <a className="view-btn" href='${item.url}'>VER RECEITA</a>
        </div>
        </div>
        `;
        });
    }
}
function renderExercise05() {
    if (rootElementExercise05) {
        rootElementExercise05.innerHTML = "";
        rootElementExercise05.innerHTML += `
        <button onclick="handleRecipes()">HANDLERECIPES</button>
        <div id="recipes-container"></div>
        `;
    }
}
renderExercise05();
