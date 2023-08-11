import "./App.css";
import Alert from "./Components/Alert";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  //const [blue, setBlue] = useState("light");

  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode enabled", " success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light  mode enabled", " success ");
    }
  };

  /* const toggleSwitchb = () => {
    if (blue === "light") {
      setBlue("dark");
      document.body.style.backgroundColor = "#0d6efd";
    } else {
      setBlue("light");
      document.body.style.backgroundColor = "white";
    }
  };*/

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleSwitch={toggleSwitch}
      />

      <Alert alert={alert} />
      <div className="container my-3" mode={mode}>
        <>
          <Textform
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />
        </>
      </div>
    </>
  );
}

export default App;
