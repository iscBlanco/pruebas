import React from 'react'
import Animal from './components/Animal'
import perro1 from './imagenes/perro1.jpeg'
import perro2 from './imagenes/perro2.jpeg'
import perro3 from './imagenes/perro3.jpeg'
import perro4 from './imagenes/perro4.jpeg'

function App(){
  return (
    <div>
      <Animal
        name="Grunion"
        imgUrl={perro2}
        phone="(493)949-2866"
        email="iscblanco@porvida.com"
      />
      <Animal
        name="Gordo"
        imgUrl={perro1}
        phone="(669)126-3222"
        email="bulldogs@porvida.com"
      />
      <Animal
        name="Nordic"
        imgUrl={perro3}
        phone="(492)126-3222"
        email="otrocorreo@porvida.com"
      />
      <Animal
        name="EngelHard"
        imgUrl={perro4}
        phone="(449)126-3222"
        email="bulldogs@porvida.com"
      />
    </div>
  )
}

export default App