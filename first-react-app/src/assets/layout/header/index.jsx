import React from "react";

import "./index.scss";
function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <h3>Electrochip</h3>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
