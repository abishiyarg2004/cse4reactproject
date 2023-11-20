import React, { Component } from 'react'

export default class Count extends Component {
    
    state={
        a:0, b:0
    }
    counting=()=>{
       
      this.setState({a:this.state.a+1})
       
    }
    bcounting=()=>{
        this.setState({b:this.state.b+1})
    }
  render() {
    return (
      <div>
        <h1>Incrementing:{this.state.a}</h1>
        <button onClick={this.counting}>To increase</button><br></br>
        <h1>{this.state.b}</h1>
        <button onMouseOver={this.bcounting}>To increase on mouse over</button>
        
      </div>
    )
  }
}
