import React from 'react';

export default function ListKey1(){
    const list=[
        {id:1,name:'Sachin',college:'SKCET'},
        {id:2,name:'Amir',college:'SKCT'}
    ]

    const show=list.map((item)=> <li key={item.id}>{item.name} {item.college}</li>)

    return(
        <div>{show}</div>
        // <ul>{show}</ul>
    )
}