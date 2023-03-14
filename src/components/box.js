import { useState } from "react"

export default function Box(props){
    let styles={
        backgroundColor: props.on? "#ccc" : "transparent"
    }

    return(
        <>
            <div className="box" key={props.id} style={styles} onClick={()=>props.toggle(props.id)}></div>
        </>
    )
}