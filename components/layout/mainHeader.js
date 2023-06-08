import Link from "next/link";
import classes from './mainHeader.module.css'
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Ev-Host</Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.ul}>
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events"> All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
