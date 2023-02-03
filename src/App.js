import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div >
      <span className="title">JavaScript Events</span>
      <span className="counter">Count is <span>{count}</span></span>
      <div className="type" >
      <div className="mouse-events">
        <h2>Mouse Events</h2>
        <button onClick={() => setCount(count + 1)}>onClick</button>
        <button onMouseOver={() => setCount(count + 1)}>onMouseOver</button>
        <button onMouseOut={() => setCount(count + 1)}>onMouseOut</button>
        <button onMouseUp={() => setCount(count + 1)}>onMouseUp</button>
        <button onMouseDown={() => setCount(count + 1)}>onMouseDown</button>
        <button onMouseMove={() => setCount(count + 1)}>onMouseMove</button>
      </div>
      <div className="keyboard-events">
        <h2>KeyBoard Events</h2>
        <input
          input="text"
          placeholder="onKeyUp Event"
          onKeyUp={() => setCount(count + 1)}
        />
        <input
          input="text"
          placeholder="onKeyDown Event"
          onKeyDown={() => setCount(count + 1)}
        />
        <input
          input="text"
          placeholder="onFocus Event"
          onFocus={() => setCount(count + 1)}
        />
        <input
          input="text"
          placeholder="onBlur Event"
          onBlur={() => setCount(count + 1)}
        />
        <input
          input="text"
          placeholder="onChange Event"
          onChange={() => setCount(count + 1)}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
