import React from "react";
import axios from "axios";
import { base_url } from "../config.js";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      logged: true,
    };
  }
  Login = (event) => {
    event.preventDefault();
    let sendData = {
      username: this.state.username,
      password: this.state.password,
    };

    let url = base_url + "/admin/auth";

    axios
      .post(url, sendData)
      .then((response) => {
        this.setState({ logged: response.data.logged });
        if (this.state.logged) {
          let admin = response.data.data;
          let token = response.data.token;
          localStorage.setItem("admin", JSON.stringify(admin));
          localStorage.setItem("token", token);
          this.props.history.push("/");
        } else {
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div className="login">
          <div className="lleft">
            <img
              src="/image/telkom.png"
              alt="..."
              height="100px"
              width="100px"
              className="mt-5"
            />
            <div className="mt-3">
              <h4>MOKLET</h4>
              <h4>COMPUTER STORE</h4>
            </div>
          </div>
          <div className="lright">
            <form onSubmit={(ev) => this.Login(ev)}>
              <input
                type="text"
                className="input mb-3"
                value={this.state.username}
                onChange={(ev) => this.setState({ username: ev.target.value })}
                placeholder="Username"
              />
              <input
                type="password"
                className="input mb-4"
                value={this.state.password}
                onChange={(ev) => this.setState({ password: ev.target.value })}
                autoComplete="false"
                placeholder="Password"
              />

              <button
                className="btn-login btn btn-block text-white mb-1"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
