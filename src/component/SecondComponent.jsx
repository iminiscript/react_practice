import React, { useState } from 'react'

export const SecondComponent = (props) => {
    console.log(props.data)
    const [messages, setMessages] = useState(['a', 'b']);

    return (
        <div>
            <ul>
                <li>{props.data.name}</li>
                <li>{props.data.age}</li>
                <li>{props.data.email}</li>
            </ul>

            {
                messages.length > 1 ? <h1>You have {messages.length} messgaes </h1>
                : messages.length === 1 ? <h1>You have one Message </h1> 
                : <h1>You have no message</h1>
            }
        </div>
    )
}
