import React, { Component } from 'react'
import petFile from './components/petFile'
import Pet from './components/Pet'


class App extends Component{
  render(){
    let petBundle = petFile.map((individual)=>
      <Pet 
        key={individual.id}
        id={individual.id}
        name={individual.name} 
        gender={individual.gender} 
        breed={individual.breed}
      />
    )
   console.log(petBundle)
    return(
      <div>
        {petBundle}
      </div>

    )
  }
}
export default App