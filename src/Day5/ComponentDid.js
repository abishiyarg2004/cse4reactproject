import React, { Component } from 'react'

export default class ComponentDid extends Component {

    state={
        color1:"red"
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color1:"blue"})
        },3000)
    }
    shouldComponentUpdate(){
 return true
    }
     getSnapshotBeforeUpdate(prevProps,prevState){
            document.getElementById("i").innerHTML="My prev color "+prevState.color1
     }
  render() {
    return (
      <div>
        <h1>{this.state.color1}</h1>
        <h2 id="i"></h2>
      </div>
    )
  }
}
