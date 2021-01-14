import React from "react";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand" to="/">
                BPM TECHNOLOGY
              </h1>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a exact className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
