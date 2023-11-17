import React from "react";
import "./Wproduct.css"

const WholesalerProduct = props => {
  return (
    <div id="Wproduct-Main">
      <h1>Product Cart</h1>
      <div id="Wproduct">
        <div id="Wcards">
            <div id="Wimg">
                <img src={props.Wimg} alt="" />
            </div>
            <div id="Wtitle">
                <h3>{props.title}</h3>
                <h4>{props.contact}</h4>
                <button>Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WholesalerProduct;
