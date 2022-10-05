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
    const response = await fetchRecipes();
    const splice = response.splice(0,10)
    renderRecipes(splice);
}

async function renderRecipes(Recipes: Recipe[]) {
    const recipesContainer = document.querySelector("#recipes-container");
    if (recipesContainer) {
        recipesContainer.innerHTML = "";
        Recipes.forEach((item) => {
        recipesContainer.innerHTML += `
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