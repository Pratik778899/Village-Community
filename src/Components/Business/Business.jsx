import React, { Component } from "react";
import "./Business.css";

class Business extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { Ptitle, Pimg, Pcontact, onAddToCart } = this.props;

    return (
      <div id="Business-container">
        <div id="card-main">
          <img src={Pimg} alt={Ptitle || "Business Image"} />
          <div id="content">
            <h4>{Ptitle}</h4>
            <p>{Pcontact}</p>
            <button onClick={onAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
