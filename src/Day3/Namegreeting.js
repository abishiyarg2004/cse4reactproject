import React, { Component } from 'react'

export default class Namegreeting extends Component {
    state={
        name:""
    }
    changename=(event)=>{
       this.setState({name:event.target.value})
    }
  render() {
    return (
      <div>
       <input type='text' onChange={this.changename}></input>
       <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}
