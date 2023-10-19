//var - ela fica solta no código, mas é perigoso usar, uma boa prática é declarar antes - não se usa mais

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log (area);
// var area;

// let - precisa iniciar antes do código

// let forma = "retângulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retângulo") {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log (area);

// const - tem que ter um valor para começar, por se tratar de uma constante

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log (area);