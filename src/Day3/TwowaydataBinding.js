import React, { Component } from 'react'
import Stateconcept from './Stateconcept'
export default class TwowaydataBinding extends Component {
    
    state={
        name:"there!"

    }
    getname=(event)=>{
        this.setState({name:event.target.value})
    }
  render() {
    return (
      <div>
        <h1>Hi {this.state.name}</h1>
        type name <input type="text" onChange={this.getname}></input>
        
      </div>
    )
  }
}
