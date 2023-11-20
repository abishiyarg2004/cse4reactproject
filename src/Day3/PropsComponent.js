import React from 'react'
import Greetingcompo from './Defaultpropsclass'
import Defaultprops from './Defaultpropsfunction'
import Stateconcept from './Stateconcept'
import Setstatefn from './Setstatefn'
import Count from './count'
import TwowaydataBinding from './TwowaydataBinding'
import Dynamicrendering from './Dynamicrendering'
import Stateinfunction from './stateinfunction'
import Showfunction from './showfunction'
import Showclass from './showclass'

export default function Props(props) {
    return (
        <div>
          {/* const para={"i will become the best Artist"}; */}
        <h1>Hi my name is {props.name } ,I'm an {props.prof} i'm {props.age} years old</h1>
        {/* <Greetingcompo friend="Aaru" />
        <Greetingcompo friend="Abooo" />
        <Defaultprops /> */}
        {/* <Stateconcept />
        <Setstatefn />

        <Count /> */}
        <TwowaydataBinding />
        <Dynamicrendering islog="true" />
        <Stateinfunction />
        <Showfunction />
        <Showclass />
    </div>
  )
}

