import React, { Component } from "react";
import NavC from "./Pages/NavC";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavC />
        {this.props.children}
      </>
    );
  }
}
export default Layout;
