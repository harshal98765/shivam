import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') { 
      setMode('dark'); 
      document.body.style.backgroundColor = '#0c2e59';   
      showAlert("Dark Mode has been Enabled", "Success");  
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
