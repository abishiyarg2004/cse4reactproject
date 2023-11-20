import React ,{useState}  from 'react'

export default function Showfunction() {
    const[message,setMessage]=useState("false")

    const togglemsg=()=>{
        setMessage(!message)
    }
  return (
    <div>
      <button onClick={togglemsg}>
        {message? 'Hide Message': 'Show Message'}
      </button>
      {message && <h1>Hi! how are you</h1>}
    </div>
  )
}
