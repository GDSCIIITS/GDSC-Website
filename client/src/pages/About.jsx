import styles from "./About.module.css";
import React from "react";

const About = () => {
  return (
    <>
	<h1 className={`container ${styles.about}`}>
        <span className={styles.subheading}>About</span>
      </h1>
	  <div className={`container ${styles.container}`}>
        <p className={styles.maintext}>
          Our events are open to newbies, developers, managers, and
          organizations who are interested in Google's technologies or use them
          as part of their projects.
          <br />
          <br /> Google Developers Group Sri City is an initiative to
          concentrate the efforts of many developers in and around Sri City to
          learn, share and get productive using the various Google products.
          <br />
          <br /> Questions? <b>Please contact us at: <a href="mailto:gdsc@iiits.in">gdsc@iiits.in</a></b>
		  <br/><br/><br/><br/>

		  <h2 class="google-font"><b>Community Guidelines</b></h2>
		  <p class="google-font">
			  <b>1. Be respectful</b>
			  <br/>
			  We're all part of the same community, so be friendly, welcoming, and generally a nice person. 
			  Be someone that other people want to be around.
			  <br/>
			  <br/>
			  <b>2. Be respectful and constructive</b>
			  <br/>
			  Remember to be respectful and constructive with your communication to fellow members. 
			  Don't get into flamewars, make personal attacks, vent, or rant unconstructively. 
			  Everyone should take responsibility for the community and take the initiative to 
			  diffuse tension and stop a negative thread as early as possible.
			  <br/>
			  <br/>
			  <b>3. Be collaborative</b>
			  <br/>
			  Work together! We can learn a lot from each other. Share knowledge, and help each other out.
			</p>
			<br/><br/><br/>

			<h2 class="google-font"> <b>Code of Conduct</b></h2>
			When you join our programs, you're joining a community. And like any growing community, a few ground 
			rules about expected behavior are good for everyone. These guidelines cover both online (e.g. mailing lists, 
			social channels) and offline (e.g. in-person meetups) behavior. Violations of this code of conduct can result 
			in members being removed from the program. Use your best judgment, and if you'd like more clarity or 
			have questions feel free to reach out.
			<br/>				
			<br/>
			<br/>
			<h2 class="google-font"><b>Anti Harrasment Policy</b></h2>
			<p class="google-font">
			<h4> 
				<b>Why do we have an official Anti-Harassment policy for GDG Sri City events?</b>
			</h4>
			<ul>
			- It sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment.<br/>
			- It encourages people to attend who have had bad experiences at other events.<br/>
			- It gives event staff/volunteers instructions on how to handle harassment quickly, with minimum amount of disruption for the event.<br/>
			</ul>
			</p>
				<br/>
			<h4> 
				<b>GDG Sri City is dedicated to providing a harassment-free event experience for everyone, 
			regardless of:</b>
			</h4>
			<ul>
			- Gender<br/>
			- Sexual Orientation<br/>
			- Disability<br/>
			- Gender Identity<br/>
			- Age<br/>
			- Race<br/>
			- Religion<br/>
			- Nationality<br/>
			</ul>
			The above is not an exhaustive list -- we do not tolerate harassment of event spanarticipants in any form.<br/>
			<br/>

			<h5>
			Sexual language and imagery is not appropriate for any event venue, including talks. 
			Event participants violating these rules may be expelled from the event, and event banned from 
			future events at the discretion of the event organizers/management.
			</h5>
			<br/>
			Harassment includes (but is not limited to):<br/>
			<ul>
				- Offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion.<br/>
				- The use or display of sexual images in public spaces<br/>
				- Deliberate intimidation<br/>
				- Stalking<br/>
				- Harassing photography or recording<br/>
				- Sustained disruption of talks or other events<br/>
				- Inappropriate physical contact<br/>
				- Unwelcome sexual attention<br/>
				- Advocating for, or encouraging, any of the above<br/>
			</ul>
			<br/>
			<h6>
			Participants asked to stop any harassing behavior are expected to comply immediately.<br/><br/>

			Exhibiting partners and guests are also subject to the anti-harassment policy. In particular, exhibitors 
			and speakers should not use sexualized images, activities, or other material, 
			or otherwise create a sexualized environment in their slide decks, exhibit material, 
			exhibit staffing, promotional items or demo material.<br/><br/>

			If you are being harassed, notice that someone else is being harassed, or have any other concerns, 
			please contact an organizer or event volunteer immediately. 
			Organizers and event volunteers may be identified by t-shirts or special badges/lanyards.
			Organizers will investigate the issue and take appropriate action. 
			This may include helping participants contact venue security or local law enforcement, provide 
			escorts, or otherwise assist these experiencing harassment to fell safe for the duration of the event.<br/><br/>

			Though we hope that we never have to invoke this policy, we believe that having this 
			document helps everyone think a little more about how their actions and words affect the whole community, 
			as well as individuals in the community.<br/><br/>
			</h6>



		  </p>
		

        <img
          src="https://myaurapp.web.app/img/about.23fa5966.svg"
          alt="unimportant"
        />
      </div>
    </>
  );
};

export default About;

