import React from "react";

import App from "./App";
import AdminPanel from "./AdminPanel";
import PageNotFound from "./PageNotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";


class Router extends React.Component {

    render() {
return(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/admin" component={AdminPanel}/>
        <Route component={PageNotFound}/>
    </Switch>
</BrowserRouter>

);
    }
}

export default Router;