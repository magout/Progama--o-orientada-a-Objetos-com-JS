class DispositoEletronico {
    constructor (nome) {
        this.nome = nome
        this.ligado = false
    }
    
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) // Classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super (nome)
        this.temWifi = temWifi
    }    
    
    ligar() {
        console.log('Olha, você alterou o metodo ligar')
    }

    falaOi() {
        console.log('Oi')
    }

} // Ligando as classes

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S23 Ultra')
s1.ligar()
console.log(s1)

const t1 = new Tablet ('Tab A7', true)
t1.ligar()
t1.falaOi()


// Seus pais não herdam nada, mas vocês herdam tudo dos seus pais