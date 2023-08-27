class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} Esta falando`)
    } 
};


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} Esta falando`)
}

const p1 = new Pessoa('Matheus', 'Magoga'); 
console.log(p1.nome)