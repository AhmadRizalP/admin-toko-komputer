import React, { Fragment } from "react";
import "./One.css";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { base_url } from "../config.js";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
      adminName: null,
      productsCount: 0,
      customersCount: 0,
      transactionsCount: 0,
      adminsCount: 1,
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/login";
    }
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  getProduct = () => {
    let url = base_url + "/product";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ productsCount: response.data.length });
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message);
            this.props.history.push("/login");
          }
        } else {
          console.log(error);
        }
      });
  };

  getCustomer = () => {
    let url = base_url + "/customer";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ customersCount: response.data.length });
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message);
            this.props.history.push("/login");
          }
        } else {
          console.log(error);
        }
      });
  };

  getTransactions = () => {
    let url = base_url + "/transaksi";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ transactionsCount: response.data.length });
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message);
            this.props.history.push("/login");
          }
        } else {
          console.log(error);
        }
      });
  };

  getAdmin = () => {
    let admin = JSON.parse(localStorage.getItem("admin"));
    this.setState({ adminName: admin.name });
  };

  componentDidMount() {
    this.getAdmin();
    this.getTransactions();
    this.getCustomer();
    this.getProduct();
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="page-content">
          <div className=" p-4" id="content">
            <h3>Dashboard</h3>

            <div className="container row">
              {/* products count */}
              <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                <div className="card">
                  <div className="card-pro card-body">
                    <h4 className="text">Products Count</h4>
                    <h1 className="text-white">
                      <strong>{this.state.productsCount}</strong>
                    </h1>
                  </div>
                </div>
              </div>

              {/* customer count */}
              <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                <div className="card">
                  <div className="card-cus card-body">
                    <h4 className="text">Customers Count</h4>
                    <h1 className="text-white">
                      <strong>{this.state.customersCount}</strong>
                    </h1>
                  </div>
                </div>
              </div>

              {/* transactions count */}
              <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                <div className="card">
                  <div className="card-tran card-body">
                    <h4 className="text">Transactions Count</h4>
                    <h1 className="text-white">
                      <strong>{this.state.transactionsCount}</strong>
                    </h1>
                  </div>
                </div>
              </div>

              {/* admins count */}
              <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                <div className="card">
                  <div className="card-pro card-body">
                    <h4 className="text">Admins Count</h4>
                    <h1 className="text-white">
                      <strong>{this.state.adminsCount}</strong>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
