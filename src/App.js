import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Registration";
import { Users } from "./ViewUsers";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? 
        <>
        {/* <Login onFormSwitch={toggleForm} /> */}
        <Users onFormSwitch={toggleForm}/>
        </>
         : 
         <>
         <Register onFormSwitch={toggleForm} />
         </>
      }
    </div>
  );
}

export default App;