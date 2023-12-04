import React from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="startHeader"></div>
      <div class="head-box">
        <div class="box name">RITIKA SAHANI</div>
        <div class="box">
        <div class="form-check form-switch">
              <input class="form-check-input switchc" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
        </div>
      </div>
    </>
  )
}

export default App;