import React, { useState } from "react"
import { set, useForm } from "react-hook-form"

import Timer from "./Timer"

function Form() {
  const {register, handleSubmit, formState: { errors } } = useForm()
  const [pDuration, setPDuration] = useState(0)
  const [sDuration, setSDuration] = useState(0)
  const [lDuration, setLDuration] = useState(0)
  const [activateTimer, setActivateTimer] = useState(false)

  const onSubmit = (data) => {
    setPDuration(data.pDuration)
    setSDuration(data.suration)
    setLDuration(data.lDuration)
    setActivateTimer(true)
  }

  return (
    <div>
      {!activateTimer && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" placeholder="25 minutes" {...register("pDuration", { min: 1 })} />
            <input type="number" placeholder="5 minutes" {...register("sDuration", { min: 0 })} />
            <input type="number" placeholder="15 minutes" {...register("lDuration", { min: 0 })} />
            <input type="submit" />
          </form>
          {errors.pomodoroDuration && <p>Pomodoro Duration must be at least one minute</p>}
        </div>
      )}
      {activateTimer && (
        <Timer 
          pDuration={pDuration}
          sDuration={sDuration}
          lDuration={lDuration}
        />
      )}
    </div>
  )
}

export default Form