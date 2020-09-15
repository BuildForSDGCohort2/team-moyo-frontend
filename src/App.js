import React from "react";
import "./global.css";
import { Layout } from "../src/components/Dashboard/DashboardLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import "../src/styles/Dashboard/app.scss";
import { CreateUser } from "./components/Users/CreateUser";
import { AllUsersTable } from "./components/Users/AllUsers";
import { EditUser } from "./components/Users/EditUser";
import { BlockUser } from "./components/Users/BlockUser";
import { CreatePost } from "./components/Posts/CreatePost";
import { AllPosts } from "./components/Posts/AllPosts";
import { EditPost } from "./components/Posts/EditPost";
// import { BlockPost } from "./components/Posts/BlockPost";
import { UserPosts } from "./components/Users/UserPosts";

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
					<Route path="/create-post" component={CreatePost} />
					<Route path="/all-posts" component={AllPosts} />
					<Route path="/edit-post" component={EditPost} />
					{/* <Route path="/block-post" component={BlockPost} /> */}
					<Route path="/user-posts" component={UserPosts} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
