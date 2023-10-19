// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log (numero == numeroString); // conversão implícita, vou usar dois iguais, nesse caso vai ser true, não vai validar o tipo da varíavel

console.log (numero+numeroString); // nesse caso ele pegou o nosso número e fez a concatenação, se transformando em string

// conversão explícita

// Number () - Transforma string em número
// String () - Transforma número em string

const numero1 = 456;
const numeroString1 = "456";

console.log (numero1 + Number(numeroString1));

// ou

const numero2 = 456;
const numeroString2 = Number("456"); // detalhe, se tiver uma letra dentro dessa string de número, vai dar um NaN

console.log (numero2 + numeroString2);
