import React from 'react'

export const StopWatch = ({stopwatch}) => {
    return (
        <div style={{display:"flex"}}>
            <div style={{width: '80%'}}>{stopwatch.name}</div>
            <button onClick={()=>{}}>Pause</button>
            <button onClick={()=>{}}>Delete</button>
        </div>
    )
}