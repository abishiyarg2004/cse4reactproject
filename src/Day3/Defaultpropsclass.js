import React, { Component } from 'react'

export default class Greetingcompo extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}  i'm your friend {this.props.friend}</h1>
      </div>
    )
  }
}
Greetingcompo.defaultProps={
    name:"Abi"
}
