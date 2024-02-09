const inumero = document.querySelector('#inumero')
const tabuada = document.querySelector('#tabu')
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    let numero = Number(inumero.value)
    if(numero === 0 || isNaN(numero)){
        alert('digite um numero valido!')
        inumero.focus();
        return
    }
    let resposta = ''
    for( let i = 1; i <= 10; i++){
        resposta = `${resposta} / ${numero} x ${i} = ${numero*i}`
    }
    tabu.innerHTML = `${resposta}`
   
})