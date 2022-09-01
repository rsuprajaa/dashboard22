import React, { Component } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
  render() {
    return (
      <nav className="menuBar" style={{display: 'flex'}}>
        <div className="logo" style = {{flex: '50%'}}>
          <a href="http://localhost:3000">HOME</a>
        </div>
        <div style={{float: 'right', color: 'white'}}>
          <a href="http://localhost:3000/charts">Charts</a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
