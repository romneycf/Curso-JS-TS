
const input01 = document.querySelector("#input01");
const btPesquisar = document.querySelector("#btPesquisar");
const answer01 = document.querySelector("#answer01");
const rootElementExercise04 = document.querySelector("#root");

async function search(cep: string) {
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return await response.json();
    }
    catch(error) {
        alert("Erro na API");
    }
}

btPesquisar?.addEventListener('click',  async function(){
    const input01Value = (input01 as HTMLInputElement).value;
    if(input01Value.length == 8)
    {
        const resposta = await search(input01Value);
        (<HTMLInputElement>document.getElementById('answer01')).value = JSON.stringify(resposta);
    }
    else
    {
        alert ("Digite um CEP válido (8 digitos)")
    }
});
