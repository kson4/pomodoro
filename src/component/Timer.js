import React, { useEffect, useState } from "react"
import Form from "./Form"
import "./Timer.css"

function Timer({pDuration, sDuration, lDuration, subject}) {
  const [time, setTime] = useState()
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTime(pDuration * 60)
  }, [])

  useEffect(() => {
    let interval = null
    if (start) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 100)
    } 
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [start])

  return (
    <div className="container">
      <div className="clock">
        <div className="current-time">
          <span>{Math.floor(time / 60)}</span>
          <span>:</span>
          <span>{("0" + (time % 60)).slice(-2)}</span>
        </div>
        <div className="buttons">
          {!start && (
            <button onClick={() => setStart(true)}>Start</button>
          )}

          {start && (
            <button onClick={() => setStart(false)}>Pause</button>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Timer