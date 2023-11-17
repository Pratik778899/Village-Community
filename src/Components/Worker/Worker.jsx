import React, { Component } from "react";
import "./Worker.css";

class Worker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Wimg, Wname, Wcontact, Wprice, Wlocation, onHire } = this.props;

    return (
      <div id="Worker-container">
        <div id="card-main">
          <img src={Wimg} alt={Wname || "Worker Image"} />
          <div id="content">
            <p>Name: {Wname}</p>
            <p>Contact: {Wcontact}</p>
            <p>Price: {Wprice}</p>
            <p>Location: {Wlocation}</p>
            <button onClick={onHire}>Hire</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Worker;
