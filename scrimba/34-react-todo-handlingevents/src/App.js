import React from 'react'
import Container from './components/Container'

function App(){
  return(
    <div>
      <Container/>
    </div>
  )
}
export default App
/**
 * lecciones aprendidas en este ejercicio son:
 * 
 * no olvidar el bind del metodo de setState
 * 
 * map da recorrido a una lista de su mismo tamano, se pueden hacer cambios en la lista
 * mas no reducir o aumentar la misma.
 * 
 * reduce por su parte es para hacer seleccion de una lista el resultado puede ser una 
 * lista del mismo tama;o o mas pequena segun sea el caso.
 */