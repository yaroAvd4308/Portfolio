import { Link } from "react-router-dom";

export default function NavBar() {
  return(
      <div className="site-nav">
        <ul className="site-nav__list">
          <li><Link className="site-nav__link" to="/">yaroslav avdeev</Link></li>
          <li><Link className="site-nav__link" to="/about">about</Link></li>
          <li><Link className="site-nav__link" to="/projects">projects</Link></li>
          <li><Link className="site-nav__link" to="/skills">skills</Link></li>
          <li><Link className="site-nav__link" to="/contact">contact</Link></li>
        </ul>
      </div>
  )
}
