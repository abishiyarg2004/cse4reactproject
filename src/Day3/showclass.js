import React, { Component } from 'react'

export default class Showclass extends Component {
  state={
    message:"false"
  }
  togglemsg=()=>{
    this.setState({message:!this.state.message})
  }
  render() {
    return (
      <div>
        <button onClick={this.togglemsg}>{this.state.message?"Hide":"Show"}</button>
        {this.state.message && <h1>Hello!!!!</h1>}
      </div>
    )
  }
}
