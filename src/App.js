import React from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./assets/profileimage.png";


const App = () => {
  const navigate = useNavigate();
  console.log(document.body.offsetWidth);
  return (
    <>
      <div class="horizontal-gutter"></div>
      <div class="head-box">
        <div class="box name">RITIKA SAHANI</div>
        <div class="box">
          <div class="form-check form-switch">
            <input class="form-check-input switchc" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>
      <div class="horizontal-gutter"></div>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md">
          <div className="left-colx">
            <img class="profile-image" src={logo} alt="image not found" />
            <div className="qualities qual1">QUALITIES</div>
            <div className="qualities qual2"> MORE QUALITIES</div>
            <div className="qualities qual3">MAYBE I AM FUN</div>
          </div>
        </div>
        <div class="col-sm-6 col-md">
          <div className="horizontal-gutter"></div>
          <div className="right-colx">
          <h1 className="right-elements right-head">UI / UX</h1>
          <h3 className="right-elements right-sub-head">DESIGNER</h3>
          <h4 className="right-elements right-body  ">Lorem ipsum dolor sit amet consectetur. A neque urna mi lacinia augue leo tellus dictum eleifend. Massa placerat odio velit dolor leo.</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;