import React from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./assets/profileimage.png";


const App = () => {
  const navigate = useNavigate();
  console.log(document.body.offsetWidth);
  return (
    <>
      <div className="pivot-point"></div>
      <div className="navigation">
        <div class="horizontal-gutter"></div>
        <div class="head-box">
          <div class="box name">RITIKA SAHANI</div>
          <div class="box">
            <label className="switchx">
              <input type="checkbox" />
              <span className="sliderx"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="initial-slide">
        <div class="horizontal-gutter"></div>
        <div class="row g-0 text-center colorsx2">
          <div class="col-sm-6 col-md">
            <div className="left-colx">
              <img class="profile-image" src={logo} alt="not found" />
              <div className="qualities qual1">QUALITIES</div>
              <div className="qualities qual2"> MORE QUALITIES</div>
              <div className="qualities qual3">MAYBE I AM FUN</div>
            </div>
          </div>
          <div class="col-sm-6 col-md colorsx1">
            <div className="horizontal-gutter"></div>
            <div className="right-colx">
              <div>
                <h1 className="right-elements right-head hollow-bold">UI / UX</h1>
                <h3 className="right-elements right-sub-head">DESIGNER</h3>
              </div>
              <h4 className="right-elements right-body thin">Lorem ipsum dolor sit amet consectetur. A neque urna mi lacinia augue leo tellus dictum eleifend. Massa placerat odio velit dolor leo.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pivot-point slide index-slide">
        <div className="horizontal-gutter"></div>
        <div class="container text-center ">
          <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 index-tile">
            <div class="col block">
              <div class="p-3">
                <div className="index-red hollow-bold">BRAND</div>
                <div className="index-red">IDENTITY</div>
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &rarr;</div>
              </div>
            </div>
            <div class="col vl">
                <div class="vertical-line"></div>
            </div>
            <div class="col block">
              <div class="p-3">
                <div className="index-red hollow-bold">CASE</div>
                <div className="index-red">STUDY</div>
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &rarr;</div>
              </div>
            </div>
            <div class="col vl">
                <div class="vertical-line"></div>
            </div>
            <div class="col block">
              <div class="p-3">
                <div className="index-red single-line-index">POSTERS</div>
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &rarr;</div>
              </div>
            </div>
            <div class="col vl">
                <div class="vertical-line"></div>
            </div>
            <div class="col block">
              <div class="p-3">
                <div className="index-red hollow-bold">PASSION</div>
                <div className="index-red">PROJECT</div>
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &rarr;</div>
              </div>
            </div>
            <div class="col vl">
                <div class="vertical-line"></div>
            </div>
            <div class="col block">
              <div class="p-3">
                <div className="index-red single-line-index">EXPERIENCE</div>
                <div className="check-it-out">CHECK IT OUT</div>
                <div className="right-arrow"> &rarr;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer pivot-point">
        <div className="footer-content">
          <div className="footer-red">
            <div className="hollow-bold want-to">WANT TO </div>
            <div className="collab">COLLABORATE?</div>
          </div>
          <div className="footer-context thin">Hit me up at <a href="mailto:ritika.sahani0423@gmail.com?">ritika.sahani0423@gmail.com</a> and let’s work on new design adventures together!</div>
        </div>
      </div>
    </>
  )
}

export default App;