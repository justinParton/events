import Form from "./components/Form";
import FormInfo from "./components/FormInfo";
import RegistrationModal from "./partials/RegistrationModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";

function App() {
  const isLocal = process.env.REACT_APP_ENV;
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img
            style={{ width: "11%" }}
            src="http://theresnoplanb.com/storage/app/media/proph2.png"
          />

          <span></span>

          <div
            className="navbar-collapse text-center collapse show"
            id="navbarsExample09"
          ></div>
        </div>
        {isLocal && (
          <div style={{ marginLeft: "10px" }}>
            <div className="d-block d-sm-none p-2 bg-success text-white">
              X-Small Display
            </div>
            <div className="d-none d-sm-block d-md-none p-2 bg-success text-white">
              Small Display
            </div>
            <div className="d-none d-md-block d-lg-none p-2 bg-success text-white">
              Medium Display
            </div>
            <div className="d-none d-lg-block d-xl-none p-2 bg-success text-white">
              Large Display
            </div>
            <div className="d-none d-lg-block d-xxl-none p-2 bg-success text-white">
              XL Display
            </div>
            <div className="d-none d-xxl-block p-2 bg-success text-white">
              2XL Display
            </div>
          </div>
        )}
      </nav>

      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img
                className="d-md-block img-fluid header-img mx-auto d-block"
                id="event-img"
                src="/Manifest.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="container">
          <div className="row mt-5">
            <FormInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
