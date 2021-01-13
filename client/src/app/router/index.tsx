import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { routes } from "./routes";

export function Router() {

    return (
        <BrowserRouter>
            <Switch>
                {
                    routes.map(route => <Route path={route.path} component={route.component} />)
                }
            </Switch>
        </BrowserRouter>
    )
}