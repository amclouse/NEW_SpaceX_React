import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import CapsuleDisplay from "../DataDisplay/CapsuleDisplay";
import Home from "../Home";
import Dragon from "../DataDisplay/Dragon"

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
            indicatorColor="none"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Link to="/home">
              <Tab label="Home" textColor="secondary" />
            </Link>
            <Link to="/display">
              <Tab label="Missions" textColor="secondary" />
            </Link>
            <Link to="/dragon">
              <Tab label="Dragon" textColor="secondary" />
            </Link>
          </Tabs>
        </Paper>
        
        {/* Switch/Routes */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/display">
            <CapsuleDisplay url={props.url} />
          </Route>
          <Route path="/dragon">
            <Dragon url={props.url} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
