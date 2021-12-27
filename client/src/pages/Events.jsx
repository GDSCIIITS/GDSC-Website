import React from "react";
import Card from "@material-ui/core/Card";
import Box from '@mui/material/Box';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
import styles from "./Events.module.css";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
	dark: {
		backgroundColor: '#292929', 
		color: 'white',
	}
}))

const dark = { backgroundColor: '#292929', color: 'white' }
const CardOne = (props) => {
	return <React.Fragment>
		<CardContent style={props.theme ? dark : {}}>
			<Typography style={props.theme ? { ...dark, fontSize: 14 } : { fontSize: 14 }} color="text.secondary" gutterBottom>
				Dec 25, 2021
			</Typography>
			<Typography style={props.theme ? dark : {}} variant="h5" component="div"><b style={props.theme ? dark : {}}>
				Test Component
			</b></Typography>
			<Typography style={props.theme ? { ...dark, mb: 1.5 } : { mb: 1.5 }} color="text.secondary">
				Online/Offline
			</Typography>
			<br />
			<Typography style={props.theme ? dark : {}} variant="body2">
				<b style={props.theme ? dark : {}}><a href="mailto:gdsc@iiits.in" style={props.theme ? { ...dark, color: '#2c7eea' } : {}}>See more :)</a></b>
			</Typography>
		</CardContent>
		<CardActions style={props.theme ? dark : {}}>
			{/* <Button size="small" style={props.theme ? dark : {}}>Learn More</Button> */}
		</CardActions>
	</React.Fragment>
}

const columns = [
	{ id: 'EventName', label: 'Event Name', minWidth: 170, fontweight: 'bold' },
	{ id: 'code', label: 'Date', minWidth: 100, align: 'center', fontweight: 'bold' },
	{
		id: 'Venue',
		label: 'Venue',
		minWidth: 170,
		align: 'center',
		fontweight: 'bold'
	},
	{
		id: 'more',
		label: 'See More',
		minWidth: 170,
		align: 'center',
		fontweight: 'bold'
	},
];

function createData(EventName, code, Venue, more) {
	return { EventName, code, Venue, more };
}

const rows = [
	createData('30 Days of Google Cloud', '2021-09-01', 'Online', 'See more'),
	createData('Kotlin DEV', '2021-12-01', 'Online', 'See more'),
	createData('waiting...', '202y-mm-dd', 'Online/Offline', 'See more'),
	createData('Ola!', '2022-mm-dd', 'Some address', 'See more'),
	createData('More can be added with pagination', '2022-mm-dd', 'Some address', 'See more'),
];

function StickyHeadTable(props) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const darkTheme = useStyles();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={props.theme ? { ...dark, width: '100%', overflow: 'hidden' } : { width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={props.theme ? { ...dark, maxHeight: 440 } : { maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table" sx={props.theme ? dark : {}}>
					<TableHead
						sx={props.theme ? dark : {}}>
						<TableRow sx={props.theme ? dark : {}}>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
									sx={
										props.theme ? dark : {}
									}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody sx={props.theme ? dark : {}}>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}
										sx={
											props.theme ? dark : {}
										}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}
													sx={
														props.theme ? dark : {}
													}
												>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				classes={{ 
					toolbar: props.theme ? darkTheme.dark : '',
					selectLabel: props.theme ? darkTheme.dark : '',
					select: props.theme ? darkTheme.dark : '',
					selectIcon: props.theme ? darkTheme.dark : '',
					displayedRows: props.theme ? darkTheme.dark : '',
					actions: props.theme ? darkTheme.dark : '',
				}}
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				className={props.theme}
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

const Events = () => {
	const themeData = useSelector((state) => state.DarkMode)
	const classname = themeData.theme ? styles.dark : '';
	return (
		<>
			<h2 className={`container ${styles.Events} ${classname}`}>
				<b className={classname}>Our <span className={styles.subheading + " " + classname}>Events</span></b>
			</h2>
			<div className={`container ${styles.container} ${classname}`}>
				<p className={styles.maintext + " " + classname}>
					Questions? <b className={classname}>Please contact us at: <a href="mailto:gdsc@iiits.in" className={classname}>gdsc@iiits.in</a></b>
				</p>
			</div>
			<br />
			<br />

			<h2 className={`container ${styles.Events} ${classname}`}>
				<b className={classname}>Our <span className={styles.subheading + " " + classname}>Feature Event</span> & <span className={styles.subheading + " " + classname}>Meetups</span></b>
			</h2>
			<div className={`container ${styles.container + " " + classname} ${classname}`}>
				<p className={styles.maintext + " " + classname}>
					Events are listed in reverse chronological order by date.
				</p>
			</div>

			<div className={`container ${styles.container} ${classname}`}>
				<p className={styles.maintext + " " + classname}>
					<Box sx={classname ? { ...dark, minWidth: 275 } : { minWidth: 275 }}>
						<Card style={
							classname ? { ...dark, borderRadius: "100", outline: "solid grey" } : { borderRadius: "100", outline: "solid grey" }
						}>{<CardOne theme={classname} />}</Card>
					</Box>
				</p>
			</div>

			<br />
			<br />
			<br />
			<br />
			<br />

			<div className={`container ${styles.sameline} ${classname}`}>
				<h4 className={`container ${styles.Events} ${classname}`}>
					<span className={styles.subheading + " " + classname}>Directory of past events</span>
					<br />
					<h6 className={classname}>Events are listed in reverse chronological order by date.</h6>
				</h4>

				<div className={"col-md-7 " + classname}>
					<input className={"form-control " + classname} name="SEARCH" type="text" placeholder="Search" /> <br />
				</div>
			</div>
			<div className={`container ${styles.container} ${classname}`}>
				<StickyHeadTable theme={classname} />
			</div>


		</>
	);
};

export default Events;
