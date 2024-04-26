function verificar () {
    
    var agora = new Date ()
    var ano = agora.getFullYear ()
    var IDanonas = document.querySelector('#txtano')
    var anonas = Number(IDanonas.value)
    var resp = document.querySelector('#res')

    if (anonas.length == 0) {

    }


    resp.innerHTML = `Você nasceu no ano ${anonas}, logo `
}

// min 10:26