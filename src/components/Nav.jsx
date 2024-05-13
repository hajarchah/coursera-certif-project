import React from "react";
import './navbar.css';

function Nav() {

    return (
        <React.Fragment>
          <nav id="navbar">
            <div className="nav-wrapper">
              <p className="brand">
                Luxe
                <strong>Revive</strong>
              </p>
            </div>
          </nav>
        </React.Fragment>
      );
}

export default Nav