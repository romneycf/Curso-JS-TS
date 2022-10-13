const rootElementExercise05 = document.querySelector("#root");
const inputRecipeFilter = document.querySelector("#input-recipe-filter");

type Author = { id: number; nome: string; img_caminho: string; };

const authors: Author[] = [
    { id: 1, nome: "Jair Messias", img_caminho: '../../img/authors/JM.png' },
    { id: 2, nome: "Carlos Bolso", img_caminho: '../../img/authors/SC.png' },
    { id: 3, nome: "Barbinha", img_caminho: '../../img/authors/BR.png' },
    { id: 4, nome: "Luiz Inácio", img_caminho: '../../img/authors/YB.png' }
];

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

async function handleRecipes(filter?: string) {
    const inputRecipeFilter = document.querySelector("#input-recipe-filter") as HTMLInputElement;
    const inputFilterValue = (inputRecipeFilter as HTMLInputElement).value.toLowerCase();
    //TENTAR IMPLEMENTAR LOADING COM TRY CATCH
    const response = await fetchRecipes();
    const filteredRecipes = response;
    // response.filter((Recipe) => {
    //     let result = false;
    //     Recipe['Ingredients'].forEach((e) => {
    //         if(inputFilterValue.includes(e)){
    //             result = true;
    //         }
    //         return filteredRecipes 
    //     })
    // });//CODAR FILTRO AQUI
    return handlePaginator(filteredRecipes);
}

function handlePaginator(Recipes: Recipe[], itemsPerPage = 20, initialItem = 0, finalItem = 20) {   
    if (Recipes.length > itemsPerPage) {
        const splicedRecipes = Recipes.slice(initialItem, finalItem);
        console.log(Recipes, itemsPerPage, initialItem, finalItem);
        return renderRecipes(Recipes, splicedRecipes, itemsPerPage, initialItem, finalItem);
    }
    return renderRecipes(Recipes);
}

// async function filterRecipes(filters: string) {
//     const response: Recipe[] = await fetchRecipes();
//     // const filteredRecipes = response.filter((Recipe, index) => Recipe['Ingredients'].some(filters));
//     const filteredRecipes = response.splice(0,2).filter((Recipe) => {
//         Recipe['Ingredients'].forEach((e) => {
//             console.log(e);
//             console.log(filters);
//             if(e.includes(filters)){
//                 return true;
//             }})});
//     return filteredRecipes
// }



function btback5() {
    return window.location.href = '../../index.html';
}

function modalRecipeOpen(url: string) {
    return window.location.href = "#open-modal-" + url;
}

function modalRecipeClose(url: string) {
    // let id = "open-modal-" + url;
    // const modal = document.getElementById("#"+id);
    // console.log(modal);
    // //document.querySelector("#open-modal-" + url) as HTMLDivElement;
    // if(modal){
    //     modal.style.display = "none"; 
    // }
    return window.location.href = "";
}

function renderRecipes(Recipes: Recipe[], splicedRecipes?: Recipe[], itemsPerPage = 20, initialItem = 0, finalItem = 20) {
    const recipesContainer = document.querySelector("#recipes-container");
    const paginatorContainer = document.querySelector("#paginator-container");
    var renderedRecipes = Recipes;
    if (splicedRecipes) {
        renderedRecipes = splicedRecipes;
        if (paginatorContainer) {
            paginatorContainer.innerHTML = "";

            let frstpg = document.createElement("button");
            frstpg.id = "frstpg-button";
            frstpg.className = "custom-button";
            frstpg.innerHTML = `<i class="fa fa-angle-double-left"></i>`;
            frstpg.addEventListener("click", function () {
                handlePaginator(Recipes, itemsPerPage, 0, itemsPerPage);
            });
            paginatorContainer.appendChild(frstpg);

            let bckbtn = document.createElement("button");
            bckbtn.className = "custom-button";
            bckbtn.innerHTML = `<i class="fa fa-angle-left"></i>`;
            bckbtn.addEventListener("click", function () {
                if(initialItem > 0){
                    handlePaginator(Recipes, itemsPerPage, (initialItem-(itemsPerPage + 1)), (finalItem-(itemsPerPage + 1)));
                }    
            });
            paginatorContainer.appendChild(bckbtn);

            let selectItems = document.createElement("select");
            selectItems.id = "select-items-per-page";
            selectItems.className = "custom-select";
            selectItems.selectedIndex = itemsPerPage;
            selectItems.addEventListener("change", function () {
                console.log(itemsPerPage.toString());
                console.log(Recipes, parseInt(this.value), 0, parseInt(this.value));
                handlePaginator(Recipes, parseInt(this.value), 0, parseInt(this.value));
            });
            
            let option1 = document.createElement("option");
            option1.text = "20";
            option1.value = "20";
            selectItems.appendChild(option1);

            let option2 = document.createElement("option");
            option2.text = "50";
            option2.value = "50";
            selectItems.appendChild(option2);

            let option3 = document.createElement("option");
            option3.text = "100";
            option3.value = "100";
            selectItems.appendChild(option3);

            paginatorContainer.appendChild(selectItems);

            let fwdbtn = document.createElement("button");
            fwdbtn.id = "fwd-button";
            fwdbtn.className = "custom-button";
            fwdbtn.innerHTML = `<i class="fa fa-angle-right"></i>`;
            fwdbtn.addEventListener("click", function () {
                if(finalItem < Recipes.length){
                    handlePaginator(Recipes, itemsPerPage, finalItem + 1, finalItem + itemsPerPage + 1);
                }
            });
            paginatorContainer.appendChild(fwdbtn);

            let lstpg = document.createElement("button");
            lstpg.id = "lstpg-button";
            lstpg.className = "custom-button";
            lstpg.innerHTML = `<i class="fa fa-angle-double-right"></i>`;
            lstpg.addEventListener("click", function () {
                handlePaginator(Recipes, itemsPerPage, (Recipes.length-itemsPerPage), (Recipes.length));
            });
            paginatorContainer.appendChild(lstpg);
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
        <div id="open-modal-${item.url}" class="modal-window" onclick="modalRecipeClose('${item.url}')">
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

function renderExercise05(bestAuthors: Author[]) {
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
            <input id="input-recipe-filter" class="custom-input"></input>
            <select id="select-recipe-filter" class="custom-select">
                <option>Author</option>
                <option>Description</option>
                <option>Ingredients</option>
                <option>Method</option>
            </select>
            <button class="custom-button" onclick="handleRecipesfilter()"><i class="fa-solid fa-search"></i></button>
            <button class="custom-button" onclick="handleRecipes()"><i class="fa-solid fa-rotate"></i></button>
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
        `
    }
}
renderExercise05(authors);