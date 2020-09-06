import React from "react";
import "./global.css";
import { Layout } from "../src/components/Dashboard/DashboardLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import "../src/styles/Dashboard/app.scss";
import { CreateUser } from "./components/Users/CreateUser";
import { AllUsersTable } from "./components/Users/AllUsers";
import { EditUser } from "./components/Users/EditUser";
import { BlockUser } from "./components/Users/BlockUser";

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
					<Route path="/edit-user" component={EditUser} />
					<Route path="/block-user" component={BlockUser} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
