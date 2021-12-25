import React from "react";
import Card from "@material-ui/core/Card";
import Box from '@mui/material/Box';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import styles from "./Events.module.css";

  const cardOne = (
	<React.Fragment>
	  <CardContent>
		<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
		  Dec 25, 2021
		</Typography>
		<Typography variant="h5" component="div">
		  Test Component by Kush
		</Typography>
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
	
		<div className={`container ${styles.sameline}`}>
			<h4 className={`container ${styles.Events}`}>
				<span className={styles.subheading}>Directory of past events</span>
				<br/>
				<h6>Events are listed in reverse chronological order by date.</h6>	
			</h4>

			<div class="col-md-7">
		<input class="form-control" name="SEARCH" type="text" placeholder="Search" />
		</div>
		</div>
		<br/><br/>
	

		</>
	);
};

export default Events;
