import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../store/team";
import styles from "./Team.module.css";

const Team = () => {
  const themeData = useSelector((state) => state.DarkMode);
  const classname = themeData.theme ? styles.dark : "";
  return (
    <div className={classname} style={{ margin: "30px 60px 0px 60px" }}>
      <Helmet>
        <title>GDSC IIITS | Team</title>
      </Helmet>
      <h2 className={`${styles.header_title} ${classname}`}>
        <strong className={classname}>Organizers</strong>
      </h2>
      <div className={`${styles.team_card} ${classname}`}>
        {teamMembers.map((member) => {
          return <TeamCard key={member.name} member={member} />;
        })}
      </div>
    </div>
  );
};

export default Team;
