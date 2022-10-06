const rootElementExercise05 = document.querySelector("#root");

type Recipe = {
    Author: string;
    Description: string;
    Ingredients: string[];
    Method: string[];
    Name: string;
    url: string;
};

async function fetchRecipes(): Promise<Recipe[]> {
    const request = await fetch(`https://receitas-server.vercel.app/api`);
    return request.json();
}

async function handleRecipes() {
    //TENTAR IMPLEMENTAR LOADING COM TRY CATCH
    const response = await fetchRecipes();
    const splice = response.splice(0,20)
    renderRecipes(splice);
}

async function filterRecipes(filters: string[]){
    const response = await fetchRecipes();
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
                <p class="recipe-title">'${item.Name}'</p>
                <p class="recipe-desc">'${item.Description}'</p>
                <a class="view-btn" href='${item.url}'>VER RECEITA</a>
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
        <div id="header">
            <h1>My CoCk Book</h1>
        </div>
        <div id="input-wrapper">
            <input>
            <button onclick="handleRecipes()">HANDLERECIPES</button>
        </div>
        <div id="recipes-container"></div>
        `
    }
}
renderExercise05();