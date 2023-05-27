import moleHillImg from './molehill.png'
import { useEffect } from 'react'


function EmptySlot(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000 )
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })


    return(
        <div>
            <img style={{'width': '30vw'}}
            src={moleHillImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot