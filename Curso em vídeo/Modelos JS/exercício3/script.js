function verificar () {
    
    var agora = new Date ()
    var ano = agora.getFullYear ()
    var IDanonas = document.querySelector('#txtano')
    var anonas = Number(IDanonas.value)
    var resp = document.querySelector('#res')

    if (anonas < 1900 || anonas > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {

    var fsex = document.getElementsByName('radsex')
    var idade = ano - anonas
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        
        genero = 'um homem'
        
        if (idade >= 0 && idade < 14) {
            //criança  
            img.setAttribute('src','imgs/homem criança.png')

        } else if (idade >=15 && idade < 19) {
            //jovem
            img.setAttribute('src','imgs/homem criança.png')

        } else if (idade >= 19 && idade < 51) {
            //adulto
            img.setAttribute('src','imgs/homem adulto.png')
        
        } else {
            //idoso
            img.setAttribute('src','imgs/homem velho.png')
        } 
    }
        
    if (fsex[1].checked) {
        
        genero = 'uma mulher'
        
        if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src','imgs/mulher criança.png')

        } else if (idade >=15 && idade < 19) {
            //jovem
            img.setAttribute('src','imgs/mulher criança.png')

        } else if (idade >= 19 && idade < 51 ) {
            //adulta
            img.setAttribute('src','imgs/mulher adulta.png')

        } else {
            //idosa
            img.setAttribute('src','imgs/mulher velha.png')

        }
    }

    resp.innerHTML = `Você é ${genero} de ${idade} anos de idade`
    resp.appendChild(img)


    }
}

