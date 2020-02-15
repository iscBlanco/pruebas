import React from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

componentDidMount(){
  fetch('https://jsonplaceholder.tyicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => this.setState({todos:json}))
}

render() {
  return (
    <div className="App">
      {JSON.stringify(this.todos)}
    </div>
  );
}

export default App;
