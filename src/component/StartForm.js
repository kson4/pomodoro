import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquarePlus } from "@fortawesome/free-solid-svg-icons"

import Form from "./Form"

function StartForm() {
  const [form, setForm] = useState(false)

  return (
    <div>
      {!form && (
        <button onClick={() => setForm(true)}>Add New Timer</button>
      )}
      {form && (
        <Form />
      )}
    </div>
  )
}

export default StartForm