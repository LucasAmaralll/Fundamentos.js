// parâmetros de função

function soma (numero1, numero2) {
    return numero1 + numero2;
}

console.log (soma (2, 2));

// parâmetro x argumentos

// ordem dos parâmetros

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log (nomeIdade("Lucas", "21"));

function soma (numero1, numero2) {
    return numero1 + numero2;
}

function multiplica (num1, num2) {
    return num1 * num2;
}

console.log (multiplica(soma(4, 5), soma (3, 3)));