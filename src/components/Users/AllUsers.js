import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UpperSection } from "../../reusable-components/upperSection";
import { moyoFirestore } from "../../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	tableContainer: {
		width: "90%",
		margin: "0 auto",
	},
	table: {
		width: "100%",
	},
	tableRow: {
		background: "#D9E6F3",
	},
	icon: {
		marginRight: "5px",
		cursor: "pointer",
	},
});

export const AllUsersTable = () => {
	const [rows, setRows] = useState([]);
	const classes = useStyles();
	const deleteUser = (name) => {
		const db = moyoFirestore;
		db.collection("Users")
			.doc(`${name}`)
			.delete()
			.then(() => {
				console.log("success to delete from db");
				window.location.reload(false);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		const db = moyoFirestore;
		db.collection("Users")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(async (doc) => {
					const result = await doc.data();
					if (result) {
						setRows((prevState) => [...prevState, result]);
					}
				});
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<UpperSection
				headerName="Users List"
				moduleName="All Users"
				name="All Users"
			/>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow className={classes.tableRow}>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Country</TableCell>
							<TableCell align="left">Github</TableCell>
							<TableCell align="left">Twitter</TableCell>
							<TableCell align="left">Mobile</TableCell>
							<TableCell align="left">Bio</TableCell>
							<TableCell align="left">Posts</TableCell>
							<TableCell align="left">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="left">{row.email}</TableCell>
								<TableCell align="left">{row.country}</TableCell>
								<TableCell align="left">{row.github}</TableCell>
								<TableCell align="left">{row.twitter}</TableCell>
								<TableCell align="left">{row.mobile}</TableCell>
								<TableCell align="left">{row.bio}</TableCell>
								<TableCell align="left">
									<Link to={{ pathname: "/user-posts", state: row }}>
										{row.posts.length}
									</Link>
								</TableCell>

								<TableCell align="left">
									<Link to={{ pathname: "/edit-user", state: row }}>
										<FontAwesomeIcon icon={faEdit} className={classes.icon} />
									</Link>
									<FontAwesomeIcon
										icon={faTrash}
										className={classes.icon}
										onClick={() => deleteUser(row.name)}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
