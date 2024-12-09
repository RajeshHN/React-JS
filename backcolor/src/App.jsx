import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("green");

  return (
    <>
 
      <div
        className="bg-orange-200 w-full h-screen" style={{backgroundColor:color}}
      >
        <button
          onClick={() => setcolor('red')}
          className="outline-none px-4 py-1  rounded-full shadow-lg text-black "
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button 
          onClick={()=>setcolor('pink')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor:'pink'}}>
            pink</button>
      </div>
    </>
  );
}

export default App;
