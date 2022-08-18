import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1350);
  };
  const toggleMode = (cls) => {
    if (cls === "dark") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.background = "#072a6c";
        document.body.style.color = "white";
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.background = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled", "success");
      }
    } else {
      if (mode.m === "light") {
        setMode("success");
        document.body.style.background = "#94B49F";
        document.body.style.color = "#1A4D2E";
        showAlert("Green mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.background = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled", "success");
      }
    }
  };

  return (
    <>
      <Router>
        <Navbar
          toggleMode={toggleMode}
          title="Textutils"
          about="About us"
          mode={mode}
        />
        <Alert showAlert={showAlert} alert={alert} />
        <Routes>
          {/* <Route exact path="/about" element={<About />} /> */}

          <Route
            path="/textutils"
            exact
            element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter the text to Analyze"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
