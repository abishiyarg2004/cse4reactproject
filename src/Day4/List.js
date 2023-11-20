import React from 'react'

export default function List() {

    const list=["anu","abi","arun"];
    const display=list.map((name)=>{
        return(
            <li>{name}</li>
        )
    })
  return (
    <div>
      <ul>{display}</ul>
    </div>
  )
}
