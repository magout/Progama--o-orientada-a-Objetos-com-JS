// 705.484.450-52 - 070.987.720-03

class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: true,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === (this.cpfLimpo.length);
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverse = cpfSemDigitos.length + 1

        for (let stringNumero of cpfSemDigitos) {
        //    console.log(stringNumero, reverse)
            total += reverse * Number(stringNumero)
            reverse--
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : 0
        console.log(total)
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.eSequencia()) return false
        this.geraNovoCpf()
        console.log(this.novoCPF)
        return this.novoCPF === this.cpfLimpo
    }
}

const cpf = new ValidaCPF('070.987.720-03')
console.log(cpf.valida())

// if (cpf.valida()) {
//     console.log('CPF Válido')
// } else {
//     console.log('CPF Inválido')
// }

