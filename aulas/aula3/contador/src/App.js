import React from "react";
import './App.css'

class App extends React.Component {

  state = {
    counter: 0
  }
  
 handleNameChange = () => {
  this.setState({ counter: this.state.counter +1});
  console.log(this.state.counter)
}

handleNameChangeM = () => {
  this.setState({ counter: this.state.counter -1});
  console.log(this.state.counter)
}

  render() {
    return(
      <div className="container">
        <h1>counter</h1>
        <h2>{this.state.counter}</h2>
        <div>
        <button className="button" onClick={this.handleNameChange}>+1</button>
        <button className="button" onClick={this.handleNameChangeM}>-1</button>
        </div>
      </div>
    )
  }
}

export default App;