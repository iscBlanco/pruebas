//En esta area es la parte de Add item

let itemAgregar = document.querySelector('#item')
let botonAgregar = document.querySelector('#agregarItem')

let arreglo=[]
botonAgregar.addEventListener('click',function(){agregarObjeto()})

function agregarObjeto() {
   itemArreglo={
                  id:"a"+arreglo.length,
                  articulo:itemAgregar.value,
                  checado: false
               }
   arreglo.push(itemArreglo)
   objetoHtml()
   desplegarPantalla()
   
}

// Declaracion para los elementos HTML

let nodoResultadoToDo = document.querySelector('#toDo > span')
let nodoResultadoComplete = document.querySelector('#Completed')
//let botonActivar = document.querySelector('#activar')

let listElement = document.createElement('ul')
let listElementComplete = document.createElement('ul')
let listItem=[]
/*
let listItem = document.createElement('li')
let listItem2 = document.createElement('li')
*/
let elementoCheck = document.createElement('input')
let etiquetaTexto = document.createElement('label')
let botonEditar = document.createElement('button')
let botonDelete = document.createElement('button')

//se define el tipo
elementoCheck.type = 'checkbox'

//se define el contenido y la clase
elementoCheck.className = 'checado'
//elementoCheck.checked = true
//etiquetaTexto.innerText = 'Lo que escriba el usuario'
botonEditar.innerText = 'EDIT'
botonEditar.id = 'editar'
botonDelete.innerText = 'DELETE'
botonDelete.id = 'borrar'

let listItem=[]
function objetoHtml(){
   for(let i=0;i< arreglo.length;i++){
      listItem[i]=document.createElement('li')
      listItem[i].id = arreglo[i].id
      etiquetaTexto.innerText = arreglo[i].articulo
      listItem[i].innerHTML += elementoCheck.outerHTML + etiquetaTexto.outerHTML + botonEditar.outerHTML + botonDelete.outerHTML
      listElement.appendChild(listItem[i])
   }
}

function desplegarPantalla(){
   if(nodoResultadoToDo.childNodes.length > 1 ){
      nodoResultadoToDo.removeChild(listItem)
   }
   nodoResultadoToDo.appendChild(listItem)
   //nodoResultadoComplete
}



/*
//element.appendChild(texto)
function displayToDoList(){
   for(let i=0; i < arreglo.length;i++){
      let element = document.createElement('input')
      element.setAttribute('type','checkbox')
      element.setAttribute('id','indice')
      resultadoNodo.appendChild(element)
      let texto = document.createTextNode(arreglo[i].articulo)
      resultadoNodo.appendChild(texto)
      let boton1 = document.createElement('button')
      let textoEditBoton = document.createTextNode('Edit')
      boton1.appendChild(textoEditBoton)
      resultadoNodo.appendChild(boton1)
      let boton2 = document.createElement('button')
      let textoEditBoton2 = document.createTextNode('Delete')
      boton2.appendChild(textoEditBoton2)
      resultadoNodo.appendChild(boton2)
      let brincoLinea = document.createElement('br')
      resultadoNodo.appendChild(brincoLinea)
   }
}
*/
