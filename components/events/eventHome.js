import classes from "./eventHome.module.css";

export default function EventHome() {
  return (
    <div className={classes.home}>
    
      <h3 style={{ color: "red" }}>hello world </h3>
      <div className={classes.homeTitle}>
        The Grand Tech Forum
      </div>
      <div>
        <p className={classes.homeText}>
        Join 300 others in Istanbul, TR 
        for a full day of inspiring keynotes and new 
        connections   at
         the premier conference for software Product Managers.
        </p>
      </div>
    </div>
  );
}
