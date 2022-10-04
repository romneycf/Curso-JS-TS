const rootElementExercise05 = document.querySelector("#root");

type Recipes = {
    Author: string;
    Description: string;
    Ingredients: string[];
    Method: string[];
    Name: string;
    url: string;
};


async function fetchRecipes(): Promise<Recipes[]> {
    const request = await fetch(`https://receitas-server.vercel.app/api`);
    const response =  await request.json();
    console.log(response);
    return response;  
}

async function handleRecipes() {
    const recipesResponse = await fetchRecipes();
    console.log(recipesResponse);
    renderRecipes(recipesResponse);
}

function renderRecipes(response: Recipes[]) {
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