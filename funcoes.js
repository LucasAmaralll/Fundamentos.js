// let x = "";
// console.log (x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função, dá o nome para ela e passa o parametro

function imprimeTexto (texto) {
    console.log (texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());
// imprimeTexto("outro texto");

// três formas de escrever funções

function soma (){
    // return tem que ser a última linha da função
    return 2 + 2;
}

// console.log (soma ());