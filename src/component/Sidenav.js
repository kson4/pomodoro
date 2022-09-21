import React from "react"
import StartForm from "./StartForm"
import "./Sidenav.css"

function Sidenav() {
  return (
    <div className="sidenav">
      
      <p className="title">Current Sessions</p>
      <StartForm />
    </div>
  )
}

export default Sidenav