console.log("Exercicio 04")

const calcExp = age => {
    switch (true) {
        case age >= 0 && age <= 1:
            console.log('você tem ${age} anos de experiência, seu nível é: Iniciante');
             break;
    
        case age >= 1 && age <= 3:
            console.log('Você tem ${age} anos de experiência, seu nível é: Intermediário');
            break;
        
        case age >= 3 && age <= 6:
            console.log('Você tem ${age} anos de experiência, seu nível é: Avançado');
            break;
        default:
            console.log('Você tem ${age} anos de experiência, seu nível é: Jedi Master');
            break;
    }
};
calcExp(1);
calcExp(3);
calcExp(6);
calcExp(7);