import AnimatedDiv from "../animate/AnimatedDiv";

export default function Contact(){
  return(
    <section className="page-section contact" id="contact">
      <h2 className="page-title">Contact Me Using:</h2>
      <div className="contact-grid">
          <AnimatedDiv hover className="glass-card contact-card">
              <h3>Telegram:</h3>
              <a href="https://t.me/pepsikolnyj" target="_blank" rel="noreferrer">@pepsikolnyj</a>
          </AnimatedDiv>
          <AnimatedDiv hover className="glass-card contact-card">
              <h3>GitHub: </h3>
              <a href="https://github.com/pepsikolnyj" target="_blank" rel="noreferrer">@pepsikolnyj</a>
          </AnimatedDiv>
      </div>
    </section>
  );
}
