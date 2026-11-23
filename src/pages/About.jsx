import AnimatedDiv from "../animate/AnimatedDiv";

export default function About() {
  return (
    <section className="page-section about" id="about">
      <div className="about__title">
          <h2 className="page-title">About</h2>
      </div>
          <AnimatedDiv hover className="glass-card about__profile">
            <p className="card-kicker">Profile</p>
            <h3 className="card-heading about__name">Yaroslav Avdeev</h3>
            <p className="card-copy"><strong>Software Developer</strong> · Full-Stack Development</p>
            <p className="card-copy"><strong>Education:</strong> MBO 4 Software Developer</p>
          </AnimatedDiv>
          <AnimatedDiv hover className="glass-card about__languages">
            <p className="card-kicker">Languages</p>
            <h3 className="card-heading">Communication</h3>
            <ul className="card-list">
              <li><strong>Russian and Ukrainian</strong> — Native</li>
              <li><strong>English</strong> — B1</li>
              <li><strong>Dutch</strong> — B1</li>
              <li><strong>German</strong> — A1</li>
            </ul>
          </AnimatedDiv>
          <AnimatedDiv hover className="glass-card about__description">
            <p className="card-kicker">About</p>
            <h3 className="card-heading">Building practical web experiences</h3>
            <p className="card-copy">
              Hi! I'm Yaroslav Avdeev, a Software Developer student at Alfa College in the Netherlands.
              I enjoy building web applications and turning ideas into functional and user-friendly solutions.
            </p>
          </AnimatedDiv>

          <AnimatedDiv hover className="glass-card about__goal">
            <p className="card-kicker">Focus</p>
            <h3 className="card-heading">Learning through real projects</h3>
            <p className="card-copy">
              I have experience with React, JavaScript, PHP, SQL, and modern web technologies.
              I'm passionate about solving technical problems, learning new technologies, and continuously
              improving my development skills. My goal is to grow as a software developer and gain
              professional experience by working on real-world projects.
            </p>
          </AnimatedDiv>
    </section>
  );
}
