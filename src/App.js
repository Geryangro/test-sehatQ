import React from "react";
import { Switch, Route } from "react-router-dom";
import route from "@routes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={route.map((route) => route.path)}>
          <Switch>
            {route.map((props, index) => (
              <Route key={props.name + index} {...props} />
            ))}
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

