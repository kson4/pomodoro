import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquarePlus } from "@fortawesome/free-solid-svg-icons"

import Form from "./Form"

function StartForm({ showForm, setShowForm }) {
  const [form, setForm] = useState(false)

  // useEffect(() => {
  //   console.log(form)
  //   setShowForm(form)
  // }, [form])

  return (
    <div className="start">
      {!form && (
        <button onClick={() => setForm(true)}>Add New Timer</button>
      )}
      {form && (
        <Form startForm={form}/>
      )}
    </div>
  )
}

export default StartForm