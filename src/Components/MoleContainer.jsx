import Mole from "./Mole"
import EmptySlot from "./EmptySlot"
import { useState } from "react"

function MoleContainer(props){
    let [ displayMole, setDisplayMole ] = useState(false)

    const handleBop = e => {
        props.setScore(props.score++)
        setDisplayMole(false)
    }

    let isMoleUp = displayMole ? <Mole /> : <EmptySlot />


    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {isMoleUp}
        </div>
    )
}

export default MoleContainer