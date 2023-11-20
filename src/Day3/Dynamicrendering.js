import React from 'react'

export default function Dynamicrendering({islog}) {
  return (
    <div>
      {islog?<p>Welcome!</p>:<p>WrongUser</p>}
    </div>
  )
}

