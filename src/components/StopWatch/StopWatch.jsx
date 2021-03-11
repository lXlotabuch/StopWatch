/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react'
import { connect } from 'react-redux'
import { closeWindow } from '../../store/actionCreator'

export const StopWatch = connect(null, {closeWindow})(({stopwatch, closeWindow}) => {
    const {id, name, closeWindow: closeTime} = stopwatch
    let timer = stopwatch.timer
    if (closeTime) {
        timer = Math.floor(((Date.now() - closeTime) / 1000) + timer)
    }
    const [time, setTime] = useState(timer)
    const [pause, setPause] = useState(false)
    let intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        return closeWindow({id, timer:time})
    }, [])

    const handlePause = () => {
        clearInterval(intervalRef.current)
        setPause((prev) => !prev)
    }

    const handleStart = () => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        setPause(prev => !prev)
    }

    return (
        <div style={{display:"flex", width: 300}}>
            <div style={{width: '40%'}}>{name}</div>
            <div style={{width: '40%'}}>{createFormatTime(time)}</div>
            {!pause && <button onClick={handlePause}>Pause</button>}
            {pause && <button onClick={handleStart}>Start</button>}
            <button onClick={()=>{}}>Delete</button>
        </div>
    )
})

const createFormatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours}:${getMinutes}:${getSeconds}`
}