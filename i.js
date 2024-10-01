/*let numeros = [1,2,3,4,5]
// let soma = ; erro sem declarar
 for(let i = 0; i< numeros.length; i++){
    soma += numeros[i]
}
console.log(soma)



Teste de mesa:
function fatorial(n){
    let resultado = 1
    for (let i = n; i > 0; i--){
        resultado*= i
    }
    return resultado
}
console.log(fatorial(5)) // esperado 120


//  depuração de código:

let numeros  = [1,2,3,4,5]
let soma = 0

for(let i = 0; i <numeros.length; i++){
    console.log(`i: ${i},numeros[i]: ${numeros[i]}, soma antes: ${soma}`)
    soma += numeros[i]
    console.log(`soma depois: ${soma}`)
}
console.log(`resultado final ${soma}`)*/



//  exercicios:

let numeros  = [1,2,3,4,5]
let somaPares = 0

for(let i = 0; i <numeros.length; i++){
    if(numeros[i] % 2 === 0)
        // console.log(`i: ${i},numeros[i]: ${numeros[i]},`)
    somaPares += numeros[i]
}
console.log(`resultado final ${somaPares}`)


function jogoPontuação(jogadas){
    let pontuacao = 0

    for(let i = 0; i <=jogadas.length; i++){
        if(jogadas[i]=== 'ganhou'){
            pontuacao +=3
        } else if(jogadas[i]=== 'empatou'){

        } else if(jogadas[i] === 'perdeu'){
            pontuacao -=1
        }
    }
    return pontuacao
}let resultadoFinal = jogoPontuação(['ganhou', 'empatou', 'perdeu','ganhou'])
console.log(`Pontuacao final ${resultadoFinal}`) // corrija os erros e veja o resultado