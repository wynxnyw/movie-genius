import React from 'react';
import {routes} from "./routes";
import {Route, Switch} from "react-router-dom";

    export function Router() {
      return (
        <Switch>
          {
            routes.map(route => (
              <Route path={route.path} exact component={route.component}/>
            ))
          }
        </Switch>
      )
    }