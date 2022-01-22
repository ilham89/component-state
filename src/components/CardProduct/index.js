import React from "react";
import "./style.css";

const CardProduct = () => {
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img
          src={require("../../assets/grapes.jpg")}
          alt="img"
          className="img"
        />
      </div>

      <h5>Judul</h5>
      <div className="description">halo ini deskripsi</div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <div className="button-qty">-</div>
          <div className="qty">1</div>
          <div className="button-qty">+</div>
        </div> */}

        <div className="button">Beli</div>
      </div>
    </div>
  );
};

export default CardProduct;
