class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
             this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas ) {
            alert('Formulario enviado.')
            this.formulario.submit()
        }
    }

    senhasValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirsenha = this.formulario.querySelector('.repetir-senha')

        if (senha.value !== repetirsenha.value) {
            valid  = false
            this.createError(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(repetirsenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        if (senha.value.length < 6 || senha.value.length > 12 ) {
            valid = false
            this.createError (senha, 'Senha precisa ter entre 6 e 12 caracteres')
        }

        return valid
    }

    camposValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }  
        
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerHTML
            
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" tal não pode estar em branco`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }

        }
        
        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, `Usuario precisa ter entre 3 e 12 caracteres`)
            valid =  false
        }
        if (!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.createError(campo, `Nome de Usuario precisa conter apenas letras e/ou numeros `)
            valid = false
        }
        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF (campo.value)
        if (!cpf.valida()) {
            this.createError(campo, `CPF Inválido`)
        }
        return true
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }


}


const valida =  new ValidaFormulario()