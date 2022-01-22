import "./App.css";
import CardProduct from "./components/CardProduct";
import React from "react";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ maxWidth: 444, width: "100%" }}>
        <h3>My List</h3>

        <CardProduct />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div className="like">suka</div>
        </div>
      </div>
    </div>
  );
}

export default App;
