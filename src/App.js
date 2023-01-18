import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alerts from './Components/Alerts';
import {
  BrowserRouter, Route, Routes
}from "react-router-dom"

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#033B51";
      showAlert(" Dark mode has been Enable ","success ");
    }else{
      setMode('light')
      document.body.style.backgroundColor="#fff";
      showAlert(" Dark mode has been Disabled ","success ");

    }
  }
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar title = "NewsLatter" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert} />
    <Routes>
      <Route exact path="/" element={<div className="container my-5">
        <TextForm heading = "Enter your Text here" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> 
        </div> }/>
      
      <Route exact path='/about' element={<About/>} />
    </Routes>
    
    </BrowserRouter>



 
    
    
</>
  );
}

export default App;
