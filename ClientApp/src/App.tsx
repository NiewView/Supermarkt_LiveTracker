import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "babel-polyfill";
import { Navbar } from "./components/index";
import {
  Authentication,
  Home,
  MarketRegister,
  UpdateStatus,
  Information
} from "./pages/index";
import { useDispatch, useSelector } from "react-redux";
import { addMarkets } from "./store/marketActions";
import Api from "./Utils/FakeApi";
import { Market } from "./types/Market";

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    populateMarketData();
  }, []);

  const populateMarketData = async function() {
    Api.GetMarketList().then(data => {
      dispatch(addMarkets(data as Array<Market>));
    });
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <Information />
          </Route>
          <Route path='/updatestatus'>
            <UpdateStatus />
          </Route>
          <Route path='/register'>
            <MarketRegister />
          </Route>
          <Route path='/auth'>
            <Authentication />
          </Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
};
