// import Props from './Component/Props/props'
import { Routes,Route } from 'react-router-dom'
// import Effect from './Component/Effect/Effect'
// import Todo from'./Component/Hook/Todo';
// import Use from './Component/Hook/Use';
import Nvabar from './Component/Dynamic-Route/Nvabar'
import Home from './Component/Dynamic-Route/home';
import About from './Component/Dynamic-Route/About';
import Contact from './Component/Dynamic-Route/Contact';
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        {/* <Route path="" element={<Effect/>}></Route>
        <Route path="/Todo" element={<Todo/>}></Route>
        <Route path="/Use" element={<Use/>}></Route>
        <Route path="/Props" element={<Props/>}></Route> */}
        <Route path="/" element={<Nvabar/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About"element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}
export default App
