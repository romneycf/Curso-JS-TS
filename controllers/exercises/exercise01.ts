function narutinho(num1:number, num2:number){
    return num1+num2;
}

function radmaiorquecodigniter(num1: number, num2:number, num3:number, num4:number, num5:number){
    return (num1+num2+num3+num4+num5)/5;
}

//IMC = Peso / (Altura * Altura)
function alucardOfagner(peso: number, altura:number){
    return(peso/(altura*altura))
}

function handleNarutinho(){
    const num01 =  (<HTMLInputElement>document.getElementById('input01')).value;
    const num02 =  (<HTMLInputElement>document.getElementById('input02')).value;
    const resposta = narutinho(Number(num01),Number(num02));
    console.log(resposta);//Pq vc pediu
    (<HTMLInputElement>document.getElementById('resposta01')).value = resposta.toString();
}

function handleRadmaiorquecodigniter(){
    const num03 =  (<HTMLInputElement>document.getElementById('input03')).value;
    const num04 =  (<HTMLInputElement>document.getElementById('input04')).value;
    const num05 =  (<HTMLInputElement>document.getElementById('input05')).value;
    const num06 =  (<HTMLInputElement>document.getElementById('input06')).value;
    const num07 =  (<HTMLInputElement>document.getElementById('input07')).value;
    const resposta = radmaiorquecodigniter(Number(num03),Number(num04),Number(num05),Number(num06),Number(num07));
    console.log(resposta);//Pq vc pediu
    (<HTMLInputElement>document.getElementById('resposta02')).value = resposta.toString();
}

function handleAlucardOfagner(){
    const num08 =  (<HTMLInputElement>document.getElementById('input08')).value;
    const num09 =  (<HTMLInputElement>document.getElementById('input09')).value;
    const resposta = alucardOfagner(Number(num08),Number(num09));
    console.log(resposta);//Pq vc pediu
    (<HTMLInputElement>document.getElementById('resposta03')).value = resposta.toFixed(2).toString();
}
