import { Link } from "react-router-dom";

export default function NavBar() {
  return(
      <div className="glass-card site-nav">
        <ul className="site-nav__list">
          <li><Link className="site-nav__link" to="/">Yaroslav Avdeev</Link></li>
          <li><Link className="site-nav__link" to="/about">About</Link></li>
          <li><Link className="site-nav__link" to="/projects">Projects</Link></li>
          <li><Link className="site-nav__link" to="/skills">Skills</Link></li>
          <li><Link className="site-nav__link" to="/contact">Contact</Link></li>
        </ul>
      </div>
  )
}
