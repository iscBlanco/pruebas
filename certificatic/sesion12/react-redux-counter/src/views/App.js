import React from "react"
import Counter from "../components/counter"
import counter from '../reducers'

const store = createStore(counter)

export default function App(props){
  //handleIncrement = () => store.dispatch({type: 'INCREMENT'})

  return (
    <div>
      <h1>Hello World Redux</h1>
      <Counter
        value={props.store.getState()}
        onIncrement = {() => props.store.dispatch({ type: 'INCREMENT'})}
        //onIncrement={this.handleIncrement}
        onDecrement= {() => props.store.dispatch({ type: 'DECREMENT'})}
        />
    </div>
  );
}