import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./global.css";
import Routes from "./Routes";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <Routes />
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
