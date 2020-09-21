import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import NewPost from "./Pages/NewPost";
import "./global.css";
import { AuthContext } from "./context/AuthContext";
import { SignUp } from "./Pages/SignUp/SignUp";

const Routes = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <>
            {!isAuth ? (
                <Switch>
                    <Route exact path="/" component={SignUp} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/new" component={NewPost} />
                </Switch>
            )}
        </>
    );
};

export default Routes;
