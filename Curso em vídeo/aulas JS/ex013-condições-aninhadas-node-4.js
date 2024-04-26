var agora = new Date()
var hora = agora.getHours()

if (hora >= 5 && hora < 12) {
    console.log(`São ${hora}hora(s) da manhã. Muito bom dia !!!`)
} else if (hora >= 12 && hora < 19) {
    console.log(`São ${hora}hora(s) da tarde. Muito boa tarde !!!`)
} else if (hora >= 19 && hora < 25) {
    console.log(`São ${hora}hora(s) da noite. Muito boa noite !!!`)
} else if (hora > 0 && hora < 5) {
    console.log(`Já são ${hora}hora(s) da madrugada !!! vá dormir !!!`)
} else if (hora > 24) {
    console.log (`Essa hora não existe no relógio :/`)
}