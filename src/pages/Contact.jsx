import AnimatedDiv from "../animate/AnimatedDiv";

export default function Contact(){
  return(
    <section className="page-section contact" id="contact">
      <h2 className="page-title">Contact:</h2>
      <div className="contact-grid">
          <AnimatedDiv hover className="glass-card contact-card">
              <p className="card-kicker">Professional network</p>
              <h3 className="card-heading">LinkedIn</h3>
              <a className="card-action" href="https://www.linkedin.com/in/yaroslav-avdeev-11633b43b/" target="_blank" rel="noreferrer">Yaroslav Avdeev <span aria-hidden="true">→</span></a>
          </AnimatedDiv>
           <AnimatedDiv hover className="glass-card contact-card">
              <p className="card-kicker">Email</p>
              <h3 className="card-heading">Let’s talk</h3>
              <a className="card-action" href="mailto:io-avdeev@student.alfa-college.nl">io-avdeev@student.alfa-college.nl <span aria-hidden="true">→</span></a>
          </AnimatedDiv>
          <AnimatedDiv hover className="glass-card contact-card">
              <p className="card-kicker">Code</p>
              <h3 className="card-heading">GitHub</h3>
              <a className="card-action" href="https://github.com/yaroAvd4308" target="_blank" rel="noreferrer">@yaroAvd4308 <span aria-hidden="true">→</span></a>
          </AnimatedDiv>
      </div>
    </section>
  );
}
