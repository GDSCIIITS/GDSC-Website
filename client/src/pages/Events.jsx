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

  const cardOne = (
	<React.Fragment>
	  <CardContent>
		<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
		  Dec 25, 2021
		</Typography>
		<Typography variant="h5" component="div"><b>
		  Test Component
		  </b></Typography>
		<Typography sx={{ mb: 1.5 }} color="text.secondary">
		  Online/Offline
		</Typography>
		<br/>
		<Typography variant="body2">
		<b><a href="mailto:gdsc@iiits.in">See more :)</a></b>
		</Typography>
	  </CardContent>
	  <CardActions>
		<Button size="small">Learn More</Button>
	  </CardActions>
	</React.Fragment>
  );

  const columns = [
	{ id: 'EventName', label: 'Event Name', minWidth: 170, fontweight: 'bold' },
	{ id: 'code', label: 'Date', minWidth: 100, align:'center', fontweight: 'bold' },
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
  
  function StickyHeadTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
	const handleChangePage = (event, newPage) => {
	  setPage(newPage);
	};
  
	const handleChangeRowsPerPage = (event) => {
	  setRowsPerPage(+event.target.value);
	  setPage(0);
	};
  
	return (
	  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
		<TableContainer sx={{ maxHeight: 440 }}>
		  <Table stickyHeader aria-label="sticky table">
			<TableHead>
			  <TableRow>
				{columns.map((column) => (
				  <TableCell
					key={column.id}
					align={column.align}
					style={{ minWidth: column.minWidth }}
				  >
					{column.label}
				  </TableCell>
				))}
			  </TableRow>
			</TableHead>
			<TableBody>
			  {rows
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row) => {
				  return (
					<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
					  {columns.map((column) => {
						const value = row[column.id];
						return (
						  <TableCell key={column.id} align={column.align}>
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
		  rowsPerPageOptions={[10, 25, 100]}
		  component="div"
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
	return (
		<>
	<h2 className={`container ${styles.Events}`}>
        Our <span className={styles.subheading}>Events</span>
    </h2>
	<div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
    		Questions? <b>Please contact us at: <a href="mailto:gdsc@iiits.in">gdsc@iiits.in</a></b>
        </p>
      </div>
	<br/>
	<br/>

	<h2 className={`container ${styles.Events}`}>
        Our <span className={styles.subheading}>Feature Event</span> & <span className={styles.subheading}>Meetups</span>
    </h2>
	<div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
		Events are listed in reverse chronological order by date.
        </p>
      </div>
	
	<div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
			<Box sx={{ minWidth: 275 }}>
				<Card style={{borderRadius:"100", outline:"solid grey"}}>{cardOne}</Card>
			</Box>
        </p>
    </div>

	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	
		<div className={`container ${styles.sameline}`}>
			<h4 className={`container ${styles.Events}`}>
				<span className={styles.subheading}>Directory of past events</span>
				<br/>
				<h6>Events are listed in reverse chronological order by date.</h6>	
			</h4>

			<div class="col-md-7">
		<input class="form-control" name="SEARCH" type="text" placeholder="Search" /> <br/>
		
		</div>
		</div>
		<div className={`container ${styles.container}`}>
		<StickyHeadTable />
		</div>
		

		</>
	);
};

export default Events;
