import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    this.setState({ cartItems });
  }

  handleRemoveItem = index => {
    const updatedCartItems = [...this.state.cartItems];
    updatedCartItems.splice(index, 1);
    this.setState({ cartItems: updatedCartItems });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  render() {
    return (
      <>
        <div id="BgColorCart">
          <div id="tagline">
            <h1>Your Cart</h1>
          </div>
          <div id="Cart-main">
            {this.state.cartItems.length === 0 ? (
              <h1>Your Cart Is empty</h1>
            ) : (
              this.state.cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  {item.Pimg && (
                    <img
                      src={
                        item.Pimg ||
                        "https://images.unsplash.com/photo-1646925707661-21e7be404458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2F0YWJsZXN8ZW58MHx8MHx8fDA%3D"
                      }
                      alt={item.Ptitle || "Product Image"}
                    />
                  )}
                  {!item.Wimg && (
                    <img
                      src={
                        item.Wimg ||
                        "https://images.unsplash.com/photo-1623211265647-acf8ad307e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpbGxhZ2UlMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D"
                      }
                      alt={item.Wname || "Worker Image"}
                    />
                  )}
                  {/* {!item.Pimg && !item.Wimg && <p>No image available</p>} */}
                  <div>
                    <p>{item.Ptitle || item.Wname || "No title"}</p>
                    {item.Wprice && <p>Price: {item.Wprice}</p>}
                    <p>
                      Contact: {item.Pcontact || item.Wcontact || "No contact"}
                    </p>
                    {item.Wlocation && <p>Location: {item.Wlocation}</p>}
                    <button onClick={() => this.handleRemoveItem(index)}>
                      Remove Item
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
