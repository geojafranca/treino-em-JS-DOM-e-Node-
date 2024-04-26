function carregar () {
    var idmsg = document.querySelector('#msg')
    var idfoto = document.querySelector('#foto>img')    
    var agora = new Date ();
    var hora = agora.getHours ();
    idmsg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 4 && hora < 12) {
        idmsg.innerHTML = `Agora são ${hora} horas. Muito bom dia !!`
        idfoto.src = 'imgs/manhã.png' 
    } else if (hora >=12 && hora < 19) {
        idmsg.innerHTML = `Agora são ${hora} hora(s). Muito boa tarde !!`
        idfoto.src = 'imgs/tarde.png'
        document.body.style.background = '#ffc400a8'
    } else {
        idmsg.innerHTML = `Agora são ${hora} hora(s). Muito boa noite !!`
        idfoto.src = 'imgs/noite.png'
        document.body.style.background = '#23232e'
    }

}

