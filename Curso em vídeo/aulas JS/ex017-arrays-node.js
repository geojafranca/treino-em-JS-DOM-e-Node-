 /* let num = [ 5 , 8 , 4 ]
    console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    num[3] = 6
    num.push(7)

    console.log(num)

    num.length */


let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)

for (let c = 0; c <= num.length; c++) {
    console.log(`${c}`)
   
}

let pos = num.indexOf(10)
if (pos == -1) {
console.log('Esse valor não foi encontrado')
} else {
console.log(`esse valor existe, a chave dele é : ${pos}`)
}

console.log(`o menor valor do vetor é ${num[0]}`)
