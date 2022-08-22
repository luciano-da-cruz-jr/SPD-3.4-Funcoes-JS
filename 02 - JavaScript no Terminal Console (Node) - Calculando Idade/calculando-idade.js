function calculaIdade(anos)
{
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade}`;
}

const pessoa1 =
{
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = 
{
    nome: 'Carla',
    idade: 26,
};

const animal =
{
    nome: 'Fiona',
    idade: 5,
    raca: 'doberman'
}

// Testes

console.log(calculaIdade.call(pessoa2, 30)); // 56
console.log(calculaIdade.call(animal, 7)); // 12
console.log(calculaIdade.apply(animal, [7])); // 12
console.log(calculaIdade.apply(animal, [4])); // 9
console.log(calculaIdade.apply(pessoa1, [4])); // 34