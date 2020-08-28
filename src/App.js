import React from "react";
import "./global.css";
import { Layout } from "../src/components/Dashboard/DashboardLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import "../src/styles/Dashboard/app.scss";

function App() {
	return (
		<div className="App">
			<Layout>
				{/* <Switch>
					<Route exact path="/">
						<Redirect to="/main-dashboard" />
					</Route>
				</Switch> */}
			</Layout>
		</div>
	);
}

export default App;
