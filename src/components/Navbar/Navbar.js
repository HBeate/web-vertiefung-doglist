import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    AboutUs: "",
    Offspring: "",
    News: "",
    Contact: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
   
    if (this.props.language === "de") {
      this.setState({
        AboutUs: "Über uns",
        Offspring: "Nachkommen",
        News: "Aktuel",
        Contact: "Kontakt",
      });
    } else if (this.props.language === "en") {
      this.setState({
        AboutUs: "About us",
        Offspring: "Offspring",
        News: "News",
        Contact: "Contact",
      });
    }else if (this.props.language === "fr") {
      this.setState({
        AboutUs: "à propos de nous",
        Offspring: "Progéniture",
        News: "Actuel",
        Contact: "Contacter",
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  closeMobileMenu = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  handleScroll = () => {
    if (window.pageYOffset > 240) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className={`navbar ${this.state.nav && "navbar__brown"}`}>
          <div className="navbar-container">
            <div className="navbar-logo">
            <NavLink to="/" >IVY</NavLink>
            </div>
            <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
            <div className="nav-menu">
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item"><NavLink  to="/" className="nav-links" onClick={this.closeMobileMenu}>Home</NavLink></li>
              <li className="nav-item"><NavLink to="/aboutus"  className="nav-links"  onClick={this.closeMobileMenu}>{this.state.AboutUs} </NavLink></li>
              <li className="nav-item"><NavLink to="/ivy" className="nav-links" onClick={this.closeMobileMenu}>Ivy</NavLink></li>
              <li className="nav-item"><NavLink to="/offspring" className="nav-links" onClick={this.closeMobileMenu}>{this.state.Offspring} </NavLink></li>
              <li className="nav-item"><NavLink to="/news" className="nav-links" onClick={this.closeMobileMenu}>{this.state.News}</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-links" onClick={this.closeMobileMenu}>{this.state.Contact}</NavLink></li>
            </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;