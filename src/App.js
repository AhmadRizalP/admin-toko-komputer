import React, { Fragment } from "react";
import Navbar from "./Component/Navbar";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Main />
      </Fragment>
    );
  }
}
export default App;
