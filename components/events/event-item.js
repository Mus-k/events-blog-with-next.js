
import classes from "./eventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
function EventItem({ title, image, date, location, id }) {
  const formDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{formDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button btnP={exploreLink}>
            <span>
            Expore events
            </span>
            <span className={classes.icon}>
              <ArrowRightIcon/>
            </span>
           </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
