'use strict'

const somar = document.getElementById('somar')
const identificar = document.getElementById('identificar')
const media = document.getElementById('notas')
const parImpar = document.getElementById('impars')
const maiorTres = document.getElementById('tres')
const cem = document.getElementById('numeroCem')

function somatoria(){

    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}

function identificar2() {
    const numero = parseInt(document.getElementById('numero-item2').value)
    const resultado =  document.getElementById('resultado-item2')

    if(numero > 0 ){
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0 ){
        resultado.textContent = 'NEGATIVO'
    }else {
        resultado.textContent = 'ZERO'
    }
}

function medias(){
    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)
    const nota4 = parseFloat(document.getElementById('nota4').value)
    const resultado = document.getElementById('media')

    const totais = nota1 + nota2 + nota3 + nota4
    const totalC = totais/4

    resultado.textContent = totalC

    if(totalC >= 6) {
        aprovado.textContent = "Aprovado!"
			
		} else {
			aprovado.textContent = 'Reprovado!'
		}
		

}

function pares (){
    const impar = parseFloat(document.getElementById('impar').value)
    const resultado = document.getElementById('resultado-item3')


    if (impar % 2 == 1) {
        resultado.textContent = 'O seu número é Impar!'
}else {
    resultado.textContent = 'O seu número é Par!'
}
}


function maiorQTres () {
    const tres = parseFloat(document.getElementById('maior').value)
    const resultado = document.getElementById('resultado-item4')


    if( tres < 3){
        resultado.textContent = 'Menor que Três'
    }else {
        resultado.textContent = 'Maior que Três'
    }

}

function igualCem () {
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)
    const c = parseFloat(document.getElementById('c').value)
    const numeroCem = parseFloat(document.getElementById('numeroCem').value)
    const resultado = document.getElementById('resultado-item5')


    const total = a + b + c

    resultado.textContent = total

    if(total >= 100){
        resultado.textContent = total
    }else {
        resultado.textContent = 'O valor é menor que 100!'
    }

}

somar.addEventListener('click', somatoria)
identificar.addEventListener('click', identificar2)
media.addEventListener('click', medias)
parImpar.addEventListener('click', pares)
maiorTres.addEventListener('click', maiorQTres)
cem.addEventListener('click', igualCem)