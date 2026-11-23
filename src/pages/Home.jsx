
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home" id="head">
      <section className="glass-card home__identity">
        <p className="card-kicker">Yaroslav Avdeev</p>
        <h1 className="home__title">Full-stack developer</h1>
        <p className="card-copy">
          I build responsive, user-friendly web interfaces with React and modern web technologies.
        </p>
        <Link className="card-action" to="/about">
          About me <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="glass-card home__availability">
        <p className="card-kicker">Available for</p>
        <p className="home__status"><span aria-hidden="true"></span> Internship & junior roles</p>
      </section>

      <section className="glass-card home__project">
        <p className="card-kicker">Featured work</p>
        <h2 className="card-heading">Portfolio website</h2>
        <p className="card-copy">A personal portfolio built with React, responsive layouts, and smooth page transitions.</p>
        <Link className="card-action" to="/projects">
          View projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="glass-card home__stack">
        <p className="card-kicker">Core stack</p>
        <div className="home__tags" aria-label="Core technologies">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML & CSS</span>
          <span>Git</span>
        </div>
        <Link className="card-action" to="/skills">
          My skills <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="glass-card home__location">
        <p className="card-kicker">Based in</p>
        <p className="home__location-name">The Netherlands</p>
        <p className="card-copy">Open to remote opportunities and to relocate across Europe.</p>
      </section>

      <section className="glass-card home__contact">
        <p className="card-kicker">Let’s connect</p>
        <h2 className="card-heading">Have an idea?</h2>
        <p className="card-copy">I’m always happy to discuss a new project or opportunity.</p>
        <Link className="card-action" to="/contact">
          Contact me <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
