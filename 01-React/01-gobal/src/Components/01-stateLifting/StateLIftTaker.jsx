import { useState } from "react";
import { Statelifter } from "./Statelifter";

function StateLiftTaker() {
  const [pName, setPName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Name from parent: {pName}</h1>
      
      {/* Corrected: Tag now starts with Capital 'S' */}
      <Statelifter
        callb={(name) => {
          setPName(name);
        }}
      />
    </div>
  );
}

export default StateLiftTaker;