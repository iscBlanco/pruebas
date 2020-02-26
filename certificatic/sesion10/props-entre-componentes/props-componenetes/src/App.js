import React from 'react'
import ClaseComponente1 from './classComponents/ClaseComponente1'
import ClaseComponente2 from './classComponents/ClaseComponente2'
import FunctionalComponent1 from './functionalComponents/FunctionalComponent1'

//este codigo es equivalente a function App(){}
//const App =()=>{
function App(){  
  console.log(FunctionalComponent1.nameReceived)
  return(
      <div>
        <h1>Este es el componente App</h1>
        <p>esta es una prueba de comunicacion entre componentes de tipo clase.</p>
        <hr/>
        <ClaseComponente1
          name="Jose Luis Blanco"
        />
        <ClaseComponente2
          name="Jose Luis Blanco"
        />
        <h1>Ahora estos son componentes funcionales</h1>
        <FunctionalComponent1
          name="Jose Blanco"
        />
          
      </div>
    )
}  
export default App;