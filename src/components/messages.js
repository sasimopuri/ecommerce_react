import { useState } from "react"

export default function Messages(){
    const [messages, setMessages] = useState([])
    
    return(
        <>
            { messages.length>0 && <h1>You have {messages.length} unread messages</h1>}
            { messages.length===0 && <h1>You're all caught up!</h1>}

        </>
    )
}