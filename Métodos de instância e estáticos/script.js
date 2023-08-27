class ControleRemoto {
    constructor (tv, volume, canal){
      this.tv = tv
      this.volume = volume
      this.canal = canal
    }

    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    // Método de instancia 
    mudarCanal() {
        this.canal += 1
        if (this.volume === 100) return
    }

    // Metodo Estatico
    static soma(x, y) {
        return x + y 
        
    }
}


const controle1 = new ControleRemoto('LG', 0, 0)
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.mudarCanal()
console.log(controle1)

console.log(ControleRemoto.soma())