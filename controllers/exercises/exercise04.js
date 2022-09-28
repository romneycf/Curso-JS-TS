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
const input01 = document.querySelector("#input01");
const btPesquisar = document.querySelector("#btPesquisar");
const answer01 = document.querySelector("#answer01");
const rootElementExercise04 = document.querySelector("#root");
function search(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
            return yield response.json();
        }
        catch (error) {
            alert("Erro na API");
        }
    });
}
btPesquisar === null || btPesquisar === void 0 ? void 0 : btPesquisar.addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const input01Value = input01.value;
        if (input01Value.length == 8) {
            const resposta = yield search(input01Value);
            document.getElementById('answer01').value = JSON.stringify(resposta);
        }
        else {
            alert("Digite um CEP válido (8 digitos)");
        }
    });
});
