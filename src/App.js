import React from "react";
import "./global.css";
import { Layout } from "../src/components/Dashboard/DashboardLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import "../src/styles/Dashboard/app.scss";
import { CreateUser } from "./components/Users/CreateUser";
import { AllUsersTable } from "./components/Users/AllUsers";

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route exact path="/">
						<Redirect to="/main-dashboard" />
					</Route>
					<Route path="/add-user" component={CreateUser} />
					<Route path="/users-list" component={AllUsersTable} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
