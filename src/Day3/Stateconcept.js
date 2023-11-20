import React, { Component } from 'react'

export default class Stateconcept extends Component {
    state ={
        name:"Aaru",
         prof:"My friend"
    }
  render() {
    return (
      <div>
        <h2>{this.state.name} is {this.state.prof} i {this.props.feel} her very much</h2>
      </div>
    )
  }
}
Stateconcept.defaultProps={
      feel:"love"
}
