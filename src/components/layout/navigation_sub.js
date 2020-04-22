import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo/logo-white.png";
import { Link } from "gatsby";
import Demo from "./demo";

export default function Navigation_sub({ location }) {
  return (
    <div className="Navigation Navigation_sub">
      <div className="Content">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <Link to="./">
              <img src={logo}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                className={
                  location.includes("/conversions") ? "active_item" : null
                }
                to="./conversions"
              >
                conversions
              </Link>
              <Link
                className={
                  location.includes("/insights") ? "active_item" : null
                }
                to="./insights"
              >
                insights
              </Link>
              <Link
                className={
                  location.includes("/experience") ? "active_item" : null
                }
                to="./experience"
              >
                experience
              </Link>

              <div
                className="chat-button"
                onClick={() => {
                  window.Chatra("openChat", true);
                }}
              >
                Chat
              </div>
              <Demo text={"DEMO"} />
            </Nav>
          </Navbar.Collapse>

          <Demo text={"DEMO"} />
        </Navbar>
      </div>
    </div>
  );
}
