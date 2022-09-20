const rootElement = document.querySelector("#root");

type Exercise = { id: number; tema: string; descrição: string; link: string };

const exercises: Exercise[] = [
    { id: 1, tema: 'Funções', descrição: 'Funções matemáticas simples.', link: '/views/exercises/exercise01.html' },
    { id: 2, tema: 'Arrays', descrição: 'Métodos de arrays.', link: '/views/exercises/exercise02.html' },
    { id: 3, tema: 'Lojinha', descrição: 'Modelo de e-comerce.', link: '/views/exercises/exercise03.html' }
]

function calcMedia(...args: number[]){
    let sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(Math.round(((sum / arguments.length) + Number.EPSILON) * 100) / 100)
    return Math.round(((sum / arguments.length) + Number.EPSILON) * 100) / 100
}

function handleCalcmedia(id: number){
    const funcionalidade = (document.querySelector("#grade-input-funcionalidade-"+id) as HTMLInputElement).value;
    const estilo = (document.querySelector("#grade-input-estilo-"+id) as HTMLInputElement).value;
    const critatividade = (document.querySelector("#grade-input-critatividade-"+id) as HTMLInputElement).value;
    const media = calcMedia(Number(funcionalidade), Number(estilo), Number(critatividade));
    media < 6 ? (document.querySelector("#item-final-grade-"+id) as HTMLSpanElement).style.color = 'red' : (document.querySelector("#item-final-grade-"+id) as HTMLSpanElement).style.color = '';  
    ((document.querySelector("#item-final-grade-"+id) as HTMLSpanElement).innerHTML) = media.toString();
}


function render(itens: Exercise[]) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
        <div class="item-wrapper">
            <div class="item-description">
              <h2>${item.id} - ${item.tema}</h2>
              <h3>${item.descrição}</h2>
                <div class="item-link">
                    <a class="a-button" href="${item.link}">Acessar</a>
                </div>
            </div>
            <div class="item-grades">
                <h2>Notas</h2>
                <table>
                    <thead>
                        <th style="text-align: left">Funcionalidade</th>
                        <th style="text-align: left">Estilo</th>
                        <th style="text-align: left">Criatividade</th>
                    </thead>
                    <tbody>
                        <td><input id="grade-input-funcionalidade-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id})"></td>
                        <td><input id="grade-input-estilo-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id});"></td>
                        <td><input id="grade-input-critatividade-${item.id}" class="grade-input" placeholder="0/10" type="number" min="0" max="10" onkeyup="(this.value > 10 || this.value < 0)? this.value = null : handleCalcmedia(${item.id});"></td>
                    </tbody>
                </table>
            </div>
            <div class="item-final-grade-wrapper">
                <h2>Média</h2>
                <span id="item-final-grade-${item.id}" class="item-final-grade">NOTA</span>
            </div>
        </div>
        `;
        });
    }
}

render(exercises);
//calcMedia(6,6,7);