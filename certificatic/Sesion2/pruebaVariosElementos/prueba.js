let nodoResultadoToDo = document.querySelector('.lista')
let nodoResultadoComplete = document.querySelector('.listaChecada')
let botonActivar = document.querySelector('#activar')

let listElement = document.createElement('ul')
let listEleChecado = document.createElement('ul')
let listItem = document.createElement('li')
let listItem2 = document.createElement('li')
let elementoCheck = document.createElement('input')
let etiquetaTexto = document.createElement('label')
let botonEditar = document.createElement('button')
let botonDelete = document.createElement('button')

//let a[]


//se define el tipo
elementoCheck.type = 'checkbox'

//se define el contenido y la clase
elementoCheck.className = 'checado'
//elementoCheck.checked = true
//etiquetaTexto.innerText = 'Lo que escriba el usuario'
botonEditar.innerText = 'EDIT'
botonEditar.className = 'editar'
botonDelete.innerText = 'DELETE'
botonDelete.id = 'borrar'

/*
listElement.appendChild(listItem)
listItem.appendChild(elementoCheck)
listItem.appendChild(etiquetaTexto)
listItem.appendChild(botonEditar)
listItem.appendChild(botonDelete)*/

//todo el codigo de arriba se sustituye por la linea de abajo
/*listItem.innerHTML += elementoCheck.outerHTML + etiquetaTexto.outerHTML + botonEditar.outerHTML + botonDelete.outerHTML
listElement.appendChild(listItem)
listItem2.innerHTML += elementoCheck.outerHTML + etiquetaTexto.outerHTML + botonEditar.outerHTML + botonDelete.outerHTML
listElement.appendChild(listItem2)
*/
let b=['no','si','quizas','a lo mejor']
let arregloItem=[]

function seleccionar(){
    for(let i=0; i < b.length; i++){
        arregloItem[i]= document.createElement('li')
            arregloItem[i].id = "a"+i
            etiquetaTexto.innerText = b[i]
            arregloItem[i].innerHTML += elementoCheck.outerHTML + etiquetaTexto.outerHTML + botonEditar.outerHTML + botonDelete.outerHTML
        if (elementoCheck.checked == false){
            
            listElement.appendChild(arregloItem[i])
        }else{
            listEleChecado.appendChild(arregloItem[i])
        }

    }
}


botonActivar.addEventListener('click',function(){
   Activa()
})

function Activa(){
    despliegue()
    let entradaCheckbox =document.querySelector('.checado')
    entradaCheckbox.addEventListener('click',despliegue)
    let borrarListener = document.querySelector('#borrar')
    borrarListener.addEventListener('click',function(){Borrar()})
}

function despliegue(){
    seleccionar()
    nodoResultadoToDo.appendChild(listElement)
    nodoResultadoComplete.appendChild(listEleChecado)

}



function Borrar(){
    listElement.removeChild(arregloItem[2])
    nodoResultadoToDo.appendChild(listElement)
}
