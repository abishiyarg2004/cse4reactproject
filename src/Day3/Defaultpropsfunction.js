import React from 'react'

export default function Defaultprops(props) {
  return (
    <div>
      <h2>i'm {props.name} I tried default props today i'm happy about it.</h2>
    </div>
  )
}
Defaultprops.defaultProps={
    name:"abi"
}



