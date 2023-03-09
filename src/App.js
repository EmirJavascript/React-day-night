import './App.css';
import { useState } from "react";

function App() {
  const [status, setStatus] = useState('day')
  const changeTime = () => {
    setStatus(!status) 
  }

  return (
    <div className={`container ${status ? "day" : "night"}`} onClick={changeTime}>
      <div className="sun-moon"></div>
    </div>
  );
}

export default App;
