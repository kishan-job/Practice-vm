import React, { useState } from "react";

export const Statelifter = (props) => {
  // Assigning the callback to a local constant as you preferred
  const call = props.callb;
  const [text, setText] = useState("");

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h1>Name from child: {text}</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input 
          id="name"
          type="text" 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <button onClick={() => call(text)}>
        Click to update in parent
      </button>
    </div>
  );
};