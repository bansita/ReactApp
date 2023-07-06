import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const changeMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#052c65'
      showAlert("Dark Mode has been enabled","sucess");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light Mode has been enabled","sucess");
      document.title='TextUtils-Dark Mode';
    }
  }
  // const toggleMode=()=>{
  //   if(Mode==='light'){
  //     setMode('dark')
  //     document.body.style.backgroundColor='green';
  //     showAlert("Green mode is enabled","sucess")
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor='white';
  //     showAlert("light mode is enabled","sucess")
  //   }
  // }

  return (
    <>
    {/* here if we don't pass the props then it will display the default props which is set in Navbar.js file */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtil" aboutText="About" mode={Mode} changeMode={changeMode} /*toggleMode={toggleMode}*//>
    <Alert alert={alert}/>
    <div className="container">
          <Routes>
            <Route exact path="/about" element={
            <About />
            }>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={Mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router>
  
    </>
  );
}

export default App;
