import React, { useEffect, useState } from "react"
import Form from "./Form"

function Timer({pDuration, sDuration, lDuration}) {
  const [time, setTime] = useState()
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTime(pDuration * 60)
    console.log("ON START")
  }, [])

  useEffect(() => {
    let interval = null
    if (start) {
      interval = setInterval(() => {
        setTime(time => time - 1)
        console.log(time)
      }, 100)
    } 
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [start])

  return (
    <div>
      <div className="current-time">
        <span>{Math.floor(time / 60)}</span>
      <span>:</span>
      <span>{time % 60}</span>
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
  )
}

export default Timer