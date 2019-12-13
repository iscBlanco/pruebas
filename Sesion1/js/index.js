let primerNum = document.querySelector('#primerNumero')
let segundoNum = document.querySelector('#segundoNumero')
let sumaNum = document.querySelector('#sumaNumeros')
let nodoResultado = document.querySelector('#resultado')

//let resultado = sumar(primerNum,segundoNum)

primerNum.addEventListener('input',function(x){
    let spanElement=document.createElement('span')
    let textResult= document.createTextNode(x.target.value)

    spanElement.appendChild(textResult)
    if (nodoResultado.childNodes.length > 3){
        //este if es para borrar el resultado anterior
        nodoResultado.removeChild(nodoResultado.childNodes[3])
    }    
    nodoResultado.appendChild(spanElement)
})

segundoNum.addEventListener('input',function(x){
    let spanElement= document.createElement('span')
    let textResult=document.createTextNode(" + "+x.target.value)

    spanElement.appendChild(textResult)

    if(nodoResultado.childNodes.length>4){
        nodoResultado.removeChild(nodoResultado.childNodes[4])
    }

    nodoResultado.appendChild(spanElement)
})


sumaNum.addEventListener('click',function(){sumar( parseInt(primerNum.value) , parseInt(segundoNum.value ) )})


function sumar (a,b) {

    desplieguePantalla(a+b)
    //console.log(a+b)
    //return a + b
}

function desplieguePantalla (a){
    //let saltoLinea=document.createElement('br')
    let spanElement=document.createElement('span')
    let textResult= document.createTextNode(" = "+a)

    spanElement.appendChild(textResult)
    //nodoResultado.appendChild(saltoLinea)
    nodoResultado.appendChild(spanElement)


}
//console.log(primerNum)
