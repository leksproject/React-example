import React from 'react'

export function Message(props) {
    return(
        <div>
        <h1 className="bg-primary text-white text-center">
        This is the message
           
        </h1>
        <h2>
        {props.greeting } {props.name}
        </h2>
        </div>
    )

}