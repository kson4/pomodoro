import Form from "./component/Form";
import Timer from "./component/Timer"
import StartForm from "./component/StartForm";
import Navbar from "./component/Navbar";
import Sidenav from "./component/Sidenav";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidenav />
      {/* <StartForm /> */}
      <Form />
      {/* <Timer /> */}
    </div>
  );
}

export default App;
