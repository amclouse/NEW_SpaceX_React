import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import CapsuleDisplay from "../DataDisplay/CapsuleDisplay";
import Home from "../Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SimpleTabs(props) {
  //MUI
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Link to="/home">
              <Tab label="Active" />
            </Link>
            <Link to="/display">
              <Tab label="Active" />
            </Link>
          </Tabs>
        </Paper>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/display">
            <CapsuleDisplay results={props.results} handleSubmit={props.handleSubmit}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
