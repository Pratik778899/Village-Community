import React, { Component } from "react";
import Worker from "./Worker";
import "./Worker.css";

class WorkerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
    };
  }

  handleAddToCart = item => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  fetchWorkers = () => {
    let workerItems =
      JSON.parse(localStorage.getItem("workerSubmissions")) || [];
    this.setState({ workers: workerItems });
  };

  componentDidMount() {
    this.fetchWorkers();
  }

  render() {
    return (
      <>
        <div id="BgColorWorker">
          <div id="tagline">
            <h1>Workers</h1>
          </div>
          <div id="Worker-main">
            {this.state.workers.map((worker, index) => (
              <Worker
                key={worker.Wname + index}
                Wimg={
                  !worker.Wimg ? "https://media.istockphoto.com/id/1093209850/photo/portrait-indian-man-standing-at-his-house-in-village.webp?b=1&s=170667a&w=0&k=20&c=8yylMG5oL-9B9b-VY5yy6Ktm7AEeMrawktlGTFLXOuU=" : worker.Wimg
                }
                Wname={worker.Wname}
                Wcontact={worker.Wcontact}
                Wprice={worker.Wprice}
                Wlocation={worker.Wlocation}
                onHire={() => this.handleAddToCart(worker)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default WorkerItem;
