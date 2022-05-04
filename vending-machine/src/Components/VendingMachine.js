import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="vending-machine">
        <img src="https://img.freepik.com/free-vector/cartoon-vending-machines-collection_52683-73161.jpg" />
        <div className="welcome">
          Hello, I am a vending machine. What would you like to eat?
        </div>
        <div className="list">
          <ul>
            <li>
              <Link to="/doritos">Doritos</Link>
            </li>
            <li>
              <Link to="/pepsi">Pepsi</Link>
            </li>
            <li>
              <Link to="/snickers">Snickers</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
