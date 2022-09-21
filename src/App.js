import { useEffect, useState } from "react"
import Form from "./component/Form"
import Timer from "./component/Timer"
import StartForm from "./component/StartForm"
import Navbar from "./component/Navbar"
import Sidenav from "./component/Sidenav"
import "./App.css"

function App() {
  const [showForm, setShowForm] = useState(false)
  // setShowForm(true)
  // console.log(showForm)
  return (
    <div className="App">
      <Navbar />
      <Sidenav showForm={showForm} setShowForm={setShowForm} />
      {/* <StartForm /> */}
      <Form showForm={showForm} />
      {/* <Timer /> */}
    </div>
  );
}

export default App;
