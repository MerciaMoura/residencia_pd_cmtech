console.log("Exercicio 05")

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["JavaScript", "ReactJS", "Redux"]
    },
    { nome: "Gabriel", habilidades: ["Volue", "Ruby on Rails", "Elixir"] }
];

const showMenssage = usuarios => {
    for (const user of usuarios) {
        const { nome, habilidades } = user;
        console.log("O ${nome} possui as habilidades: ${habilidades.join(", ")}");
    }
};