<Router>
   <Navbar title="TextUtil" about="About TextUtil" mode={mode} toggleSwitch={toggleSwitch} toggleSwitchb={toggleSwitchb} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
         
          <Route path="/">
          <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
           
          </Route>
        </Switch>
     
    </div>
    
    </Router>



import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' ; 



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode } `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        
                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> DarkMode </label>
          </div>
           <div className="mx-4">
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleSwitchb} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> BlueMode </label>
                    </div>
                    </div>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}


<BrowserRouter>
<Navbar
  title="TextUtils"
  aboutText="About Us"
  mode={mode}
  toggleSwitch={toggleSwitch}
/>

<Alert alert={alert} />
<div className="container my-3" mode={mode}>
  <Routes>
    <Route path="/about" element={<AboutUs />} />
  </Routes>
  <Routes>
    <Route
      path="/"
      element={
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      }
    />
  </Routes>
</div>
</BrowserRouter>



<a className="nav-link active" to="/about">
{props.aboutText}
</a>



