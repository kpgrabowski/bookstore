import React from "react";
import App from "./App";
import AdminPanel from "./AdminPanel";
import PageNotFound from "./PageNotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import store from '../store/store';
import {Provider} from "react-redux";

class Router extends React.Component {

    render() {
return(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/admin" component={AdminPanel}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>

    </Provider>

);
    }
}

export default Router;