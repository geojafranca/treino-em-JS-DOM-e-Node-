var idade = 18
if (idade < 16) {
    console.log(`não vota`)
} else if (idade >= 16 && idade < 18) {   
        console.log(`voto opcional`)
    } else if (idade >= 18 && idade < 65) {
        console.log(`vota obrigatoriamente`)
    } else {
        console.log(`voto opcional`)
    }