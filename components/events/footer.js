import Link from 'next/link'
import classes from './footer.module.css'

export default function Footer() {
  return (
   
     <footer className={classes.footer}>
      <div className={classes.footerLogo}>
        <Link href="/">Ev-Host</Link>
      </div>
      <div className={classes.copyRight}>2023@ All copy right reserved</div>
      
        <ul className={classes.ulList}>
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events"> All Events</Link>
          </li>
        </ul>
    
    </footer>
   
  )
}
