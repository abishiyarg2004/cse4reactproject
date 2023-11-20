import React, { Component } from 'react'

export default class Setstatefn extends Component {
    state={
        para : "Hello world! Welcome to this page"
    }
   changepara=()=>{
    this.setState({para:"Welcome abishiya! We are happy that you are here!"})
   }
  //  changeagain(){
  // this.setState({para:"This is your time to showcase yourself to the world"})
  //  }
  render() {
    return (
      <div>
        <h1>{this.state.para}</h1>
         <button onClick={this.changepara}>click me</button> <br></br>
        {/* <button onClick={()=>{this.setState({para:"Hello Abishiya"})}}>Click me</button>
        <h1>this is normal function</h1>
        <button onClick={this.changeagain.bind(this)}>This is it</button> */}
      </div>
    )
  }
}
