import React, { useState } from "react"
import { set, useForm } from "react-hook-form"

import Timer from "./Timer"
import "./Form.css"

function Form() {
  const {register, handleSubmit, formState: { errors } } = useForm()
  const [pDuration, setPDuration] = useState(25)
  const [sDuration, setSDuration] = useState(5)
  const [lDuration, setLDuration] = useState(15)
  const [subject, setSubject] = useState("")
  const [activateTimer, setActivateTimer] = useState(false)

  const onSubmit = (data) => {
    if (data.pDuration !== "") {
      setPDuration(data.pDuration)
    }
    if (data.sDuration !== "") {
      setSDuration(data.suration)
    }
    if (data.lDuration !== "") {
      setLDuration(data.lDuration)
    }
    setSubject(data.subject)
    setActivateTimer(true)
  }

  return (
    <div>
      {!activateTimer && (
        <div className="container form c-shadow">
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="header text">Setup New Pomodoro</div>
              <hr></hr>
              <div className="subject text">
                <span>Subject:</span>
                <input type="text" placeHolder="Default: None" {...register("subject")} />
              </div>
              <span className="text">Time (minutes)</span>
              <div className="entry-durations">
                <div className="entry text">
                  <span>Pomodoro </span>
                  <div className="input">
                    <input type="number" defaultValue={"25"} {...register("pDuration", { min: 1 })} />
                  </div>
                </div>

                <div className="entry text">
                  <span>Short Break </span>
                  <div className="input">
                    <input type="number" defaultValue={"5"} {...register("sDuration", { min: 0 })} />
                  </div>
                </div>

                <div className="entry text">
                  <span>Long Break </span>
                  <div className="input">
                    <input type="number" defaultValue={"15"} {...register("lDuration", { min: 0 })} />
                  </div>
                </div>
              </div>

              <div className="submit">
                <input className="submit-button bg-shadow" type="submit" value="Start" />
              </div>
              
            </form>
            {errors.pomodoroDuration && <p>Pomodoro Duration must be at least one minute</p>}
          </div>
        </div>
        
      )}
      {activateTimer && (
        <Timer 
          pDuration={pDuration}
          sDuration={sDuration}
          lDuration={lDuration}
          subject={subject}
        />
      )}
    </div>
  )
}

export default Form