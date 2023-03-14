import { useState } from "react"

export default function Jokes(props){
    const [isShown, updateIsShown]=useState(false)
    function toggle(){
        updateIsShown((prevIsShown)=>!prevIsShown)
    }
    
    return(
        <div className="jokes_container">
            <h3>{props.setup}</h3>
            <h4>{isShown && props.punchline}</h4>
            <button onClick={toggle}>Show punchline</button>
            <hr />
        </div>
    )
}