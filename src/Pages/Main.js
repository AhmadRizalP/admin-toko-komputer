import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Customers from "./Customers";
import Transactions from "./Transactions";
import Administrator from "./Administrator";
import Login from "./Login";

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/product" component={Product} />
    <Route path="/customers" component={Customers} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/administrator" component={Administrator} />
  </Switch>
);

export default Utama;
