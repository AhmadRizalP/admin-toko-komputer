import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      admin: [],
    };
  }

  getAdmin = () => {
    let temp = JSON.parse(localStorage.getItem("admin"));

    this.setState({
      admin: temp,
    });
  };

  componentDidMount() {
    this.getAdmin();
  }

  Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    window.location = "/login";
  };

  render() {
    return (
      <div className="sidebar">
        <div className="vertical-nav " id="sidebar">
          <div className="py-4 px-3">
            <h3 className="text-white text-center">TOKO KOMPUTER</h3>
            <div className="data">
              <img
                src="/image/avatar.svg"
                alt="..."
                width="80"
                height="80"
                className="rounded-circle shadow-sm"
              />
              <div className="mt-2">
                <h4 className="m-0 text-white">{this.state.admin.name}</h4>
                <p className="font-weight-normal text-white">Administrator</p>
              </div>
            </div>
          </div>
          <ul className="nav flex-column mb-0 ml-4 ">
            <li className="nav-item ">
              <Link to="/" className="nav-link ">
                <i className="fas fa-th-large fa-fw mr-4"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link ">
                <i className="fas fa-boxes fa-fw mr-4 "></i> Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers" className="nav-link ">
                <i className="fas fa-users fa-fw mr-4"></i> Customers
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/transactions" className="nav-link ">
                <i className="fas fa-people-carry fa-fw mr-4"></i> Transactions
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/administrator" className="nav-link ">
                <i className="fas fa-users-cog fa-fw mr-4"></i> Administrator
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link " onClick={() => this.Logout()}>
                <i className="fas fa-outdent fa-fw mr-4"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
