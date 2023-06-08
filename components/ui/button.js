import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.btnP) {
    return (
      <Link href={props.btnP}>
        <p className={classes.btn}>{props.children}</p>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
