import React from "react"
import StartForm from "./StartForm"
import "./Sidenav.css"

function Sidenav({ setShowForm }) {

  // function showForm(setShowForm) {

  // }

  return (
    <div className="sidenav">
      
      <p className="title">Current Sessions</p>
      <div>
        <StartForm onClick={() => setShowForm(true) }/>
      </div>
      
    </div>
  )
}

export default Sidenav