const usuario = [
    {
        login:"erick",
        pass:"erick"
    },
    {
        login:"fernando",
        pass:"fernando"
    },
    {
        login:"alemao",
        pass:"alemao"
    },
    {
        login:"admin",
        pass:"admin"
    },
]


let botao = document.getElementById('btnlogar')

botao.addEventListener('click', function logar(){

    let pegarusuario = document.getElementById('usuario').value
    let pegarsenha = document.getElementById('senha').value 
    let validalogin = false

    for(let i in usuario){

        if(pegarusuario == usuario[i].login && pegarsenha == usuario[i].pass){
           validalogin = true
           break
        }
    }
    if(validalogin == true){
        location.href = 'bemvinda'
    }else{
        alert('usuario e senha incorretos')
    }
})

