
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteSteate from './Context/notes/noteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <NoteSteate>
     <Router> 
  <Navbar/>
  <Alert alert = {alert}/>
  <div className="contanier">
    <Routes>
   <Route path='/home' element={<Home showAlert= {showAlert}/>}/>
   <Route path='/about' element={<About/>} />
   <Route path='/login' element={<Login showAlert= {showAlert}/>} />
   <Route path='/signup' element={<Signup showAlert= {showAlert}/>} />
  </Routes>
  </div>
  </Router>
  
  </NoteSteate>
    </>
  ); 
}

export default App;
