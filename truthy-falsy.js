// boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy - não são booleanos mas pode se comportar como fosse

// 0 => false
// 1 => true

console.log(0 == false); // true - resultado da comparação
console.log ("" == false); // string vazia é considerada falsa, ou seja, o resultado dessa operação será verdadeira
console.log (1==true);

// undefined ==> indefinido
// null ==> vazio ou nada

let minhaVar; // quando é sem valor, ganha automaticamente o valor de undefined
let valorNull = null;

console.log (minhaVar); // tipo de váriavel indefinida
console.log (valorNull); // tipo de váriavel objeto

let numero = 3;
let texto = "Alura";

console.log (typeof numero);// type of serve para perguntarmos o tipo de váriavel que está sendo guardada, exemplo, number ou text
console.log (typeof texto);
