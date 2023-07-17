import { Routes, Route } from "react-router-dom";
import Nvabar from "./Component/Dynamic-Route/Nvabar";
import Home from "./Component/Dynamic-Route/home";
import About from "./Component/Dynamic-Route/About";
import Contact from "./Component/Dynamic-Route/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nvabar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Pass the `match` object as a prop to the Contact component */}
        <Route path="/Contact/:name/:Lname" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
