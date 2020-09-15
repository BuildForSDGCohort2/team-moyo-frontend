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

export const BlockPost = () => {
	const [rows, setRows] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		const db = moyoFirestore;
		db.collection("Posts")
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
				headerName="Posts List"
				moduleName="All Posts"
				name="All Posts"
			/>
			<TableContainer component={Paper} className={classes.tableContainer}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow className={classes.tableRow}>
							<TableCell align="left">Author Name</TableCell>
							<TableCell align="left">Likes</TableCell>
							<TableCell align="left">Tags</TableCell>
							<TableCell align="left">Language</TableCell>
							<TableCell align="left">Community ID</TableCell>
							<TableCell align="left">Parent ID</TableCell>
							<TableCell align="left">Post</TableCell>
							<TableCell align="left">Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="left">{row.likes}</TableCell>
								<TableCell align="left">{row.tags}</TableCell>
								<TableCell align="left">{row.language}</TableCell>
								<TableCell align="left">{row.comId}</TableCell>
								<TableCell align="left">{row.parentId}</TableCell>
								<TableCell align="left">{row.postBody}</TableCell>

								<TableCell align="left">Not Blocked</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
