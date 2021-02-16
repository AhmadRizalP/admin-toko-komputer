import React, { Fragment } from "react";
import Navbar from "../Component/Navbar";
import TransactionList from "../Component/TransactionsList";
import { base_url } from "../config.js";
import $ from "jquery";
import axios from "axios";

class Transactions extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
      transaction: [],
      selectedItem: null,
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

  getTransaction = () => {
    let url = base_url + "/transaksi";

    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ transaction: response.data });
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

  componentDidMount() {
    this.getTransaction();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="page-content">
          <div className="p-4">
            <h3>Transactions List</h3>
            <div className="mt-4">
              {this.state.transaction.map((item) => (
                <TransactionList
                  key={item.transaksi_id}
                  transaction_id={item.transaksi_id}
                  customer_name={item.customer.name}
                  customer_address={item.customer.address}
                  time={item.waktu}
                  products={item.detail_transaksi}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Transactions;
