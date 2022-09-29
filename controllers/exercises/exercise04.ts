
const input01 = document.querySelector("#input01");
const btPesquisar = document.querySelector("#btPesquisar");
const answer01 = document.querySelector("#answer01");
const rootElementExercise04 = document.querySelector("#root");

async function search(cep: string) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return await response.json();
    }
    catch (error) {
        alert("Erro na API");
    }
}

btPesquisar?.addEventListener('click', async function () {
    const input01Value = (input01 as HTMLInputElement).value;
    if (input01Value.length == 8) {
        const resposta = await search(input01Value);
        (<HTMLInputElement>document.getElementById('answer01')).value = JSON.stringify(resposta);
    }
    else {
        alert("Digite um CEP válido (8 digitos)")
    }
});

type Objeto = {
    courses: {
        name: string,
        semesters: {
            matriculation_id: string,
            semester_number: string,
            semester_name: string
        }[]
    }[];
    activities: {
        date: {
            end: string,
            init: string
        }
        name: string
    }[];
}

const obj: Objeto = {
    courses: [
        {
            name: "Superior de Tecnologia em An\u00e1lise e Desenvolvimento de Sistemas",
            semesters: [
                {
                    matriculation_id: "3000411703",
                    semester_number: "3",
                    semester_name: "3\u00ba Semestre",
                },
                {
                    matriculation_id: "3000411702",
                    semester_number: "2",
                    semester_name: "2\u00ba Semestre",
                },
                {
                    matriculation_id: "3000411701",
                    semester_number: "1",
                    semester_name: "1\u00ba Semestre",
                },
            ],
        },
        {
            name: "Superior de Tecnologia em Gest\u00e3o da Produ\u00e7\u00e3o Industrial",
            semesters: [
                {
                    matriculation_id: "2315220004",
                    semester_number: "4",
                    semester_name: "4\u00ba Semestre",
                },
                {
                    matriculation_id: "2315220003",
                    semester_number: "3",
                    semester_name: "3\u00ba Semestre",
                },
                {
                    matriculation_id: "2315220002",
                    semester_number: "2",
                    semester_name: "2\u00ba Semestre",
                },
                {
                    matriculation_id: "2315220001",
                    semester_number: "1",
                    semester_name: "1\u00ba Semestre",
                },
            ],
        },
    ],
    activities: [
        {
            date: {
                end: "12/02/22",
                init: "12/02/22",
            },
            name: "Aa1",
        },
        {
            date: {
                end: "12/02/22",
                init: "12/02/22",
            },
            name: "Ta1",
        },
        {
            date: {
                end: "19/02/22",
                init: "19/02/22",
            },
            name: "Aa2",
        },
        {
            date: {
                end: "19/02/22",
                init: "19/02/22",
            },
            name: "Ta2",
        },
        {
            date: {
                end: "26/02/22",
                init: "26/02/22",
            },
            name: "Aa3",
        },
        {
            date: {
                end: "26/02/22",
                init: "26/02/22",
            },
            name: "Ta3",
        },
        {
            date: {
                end: "28/02/22",
                init: "07/02/22",
            },
            name: "Forum 1",
        },
        {
            date: {
                end: "07/03/22",
                init: "07/02/22",
            },
            name: "Av1",
        },
        {
            date: {
                end: "14/03/22",
                init: "07/02/22",
            },
            name: "Av2",
        },
        {
            date: {
                end: "04/06/22",
                init: "07/02/22",
            },
            name: "Aap1",
        },
        {
            date: {
                end: "04/06/22",
                init: "14/02/22",
            },
            name: "Aap2",
        },
        {
            date: {
                end: "04/06/22",
                init: "21/02/22",
            },
            name: "Aap3",
        },
        {
            date: {
                end: "04/06/22",
                init: "07/02/22",
            },
            name: "Adg1",
        },
        {
            date: {
                end: "04/06/22",
                init: "07/02/22",
            },
            name: "Adg2",
        },
        {
            date: {
                end: "04/06/22",
                init: "14/02/22",
            },
            name: "Adg3",
        },
        {
            date: {
                end: "04/06/22",
                init: "21/02/22",
            },
            name: "Adg4",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Cw1",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Cw2",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Cw3",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Cw4",
        },
        {
            date: {
                end: "05/03/22",
                init: "05/03/22",
            },
            name: "Aa4",
        },
        {
            date: {
                end: "05/03/22",
                init: "05/03/22",
            },
            name: "Ta4",
        },
        {
            date: {
                end: "04/06/22",
                init: "28/02/22",
            },
            name: "Aap4",
        },
        {
            date: {
                end: "04/06/22",
                init: "31/05/22",
            },
            name: "Av",
        },
        {
            date: {
                end: "04/06/22",
                init: "31/05/22",
            },
            name: "Av",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Leitura1",
        },
        {
            date: {
                end: "12/03/22",
                init: "07/03/22",
            },
            name: "Prova Presencial",
        },
        {
            date: {
                end: "11/06/22",
                init: "06/06/22",
            },
            name: "Prova Presencial",
        },
        {
            date: {
                end: "18/06/22",
                init: "13/06/22",
            },
            name: "Prova Presencial",
        },
        {
            date: {
                end: "18/06/22",
                init: "07/02/22",
            },
            name: "Eng Ava1",
        },
    ],
};