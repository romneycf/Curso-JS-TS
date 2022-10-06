const rootElementExercise05 = document.querySelector("#root");


type Recipe = {
    Author: string;
    Description: string;
    Ingredients: string[];
    Method: string[];
    Name: string;
    url: string;
    urlImage: string;
};

async function fetchRecipes(): Promise<Recipe[]> {
    const request = await fetch(`https://receitas-server.vercel.app/api`);
    return request.json();
}

async function handleRecipes() {
    const inputRecipeFilter = document.querySelector("#input-recipe-filter") as HTMLInputElement;
    inputRecipeFilter.value = '';
    //TENTAR IMPLEMENTAR LOADING COM TRY CATCH
    const response = await fetchRecipes();
    const splice = response.splice(0, 20)
    renderRecipes(splice);
}

async function filterRecipes(filters: string) {
    const response: Recipe[] = await fetchRecipes();
    // const filteredRecipes = response.filter((Recipe, index) => Recipe['Ingredients'].some(filters));
    const filteredRecipes = response.splice(0,2).filter((Recipe) => {
        Recipe['Ingredients'].forEach((e) => {
            console.log(e);
            console.log(filters);
            if(e.includes(filters)){
                return true;
            }})});
    return filteredRecipes
}



async function handleRecipesfilter() {
    const inputRecipeFilter = document.querySelector("#input-recipe-filter");
    const inputFilterValue = (inputRecipeFilter as HTMLInputElement).value.toLowerCase().split(",");
    if (inputFilterValue) {
        const filteredRecipes = await filterRecipes(inputFilterValue);
        renderRecipes(filteredRecipes);
    }
}

// async function paginatedItems(items: Recipe[], page:number){
//     const items_per_page = 20;
//     const paginatedItems = items.splice(0, items_per_page)
// }

async function renderRecipes(Recipes: Recipe[]) {
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
        <div id="recipes-container"></div>
        `
    }
}
renderExercise05();