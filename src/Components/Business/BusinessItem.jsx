import React, { Component } from "react";
import Business from "./Business";
import "./Business.css";

class BusinessItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  handleAddToCart = item => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  BusinessItems() {
    let businessItems =
      JSON.parse(localStorage.getItem("formSubmissions")) || [];
    this.setState({ articles: businessItems });
  }

  componentDidMount() {
    this.BusinessItems();
  }

  render() {
    return (
      <>
        <div id="BgColorBusiness">
          <div id="tagline">
            <h1>Business</h1>
          </div>
          <div id="Business-main">
            {this.state.articles.map((item, index) => (
              <Business
                key={item.Ptitle + index}
                Pimg={
                  !item.Pimg
                    ? "https://images.unsplash.com/photo-1612362426802-dcc0ccd25f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
                    : item.Pimg
                }
                Ptitle={item.Ptitle}
                Pcontact={item.Pcontact}
                onAddToCart={() => this.handleAddToCart(item)}
                // url={item.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BusinessItem;
