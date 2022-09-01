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
          <a href="https://oneshot-eight.vercel.app/">HOME</a>
        </div>
        <div style={{float: 'right', color: 'white'}}>
          <a href="https://oneshot-eight.vercel.app/charts">Charts</a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
