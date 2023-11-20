import React from 'react'

export default function TryCatch({name}) {
    try{
        if(name==="Harish"){
            throw new Error("Not accepted")
        }
    }
    catch(error){
        console.log(error);
        // document.write("Not accepted this name")
    }
    finally{
        // document.write("Hello there")
    }
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}
