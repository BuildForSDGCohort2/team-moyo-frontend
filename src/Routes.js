import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import NewPost from "./Pages/NewPost";
import "./global.css";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/new" component={NewPost} />
            </Switch>
        </>
    );
};

export default Routes;
