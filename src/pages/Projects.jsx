import AnimatedDiv from "../animate/AnimatedDiv"

export default function Projects() {
  return (
        <section className="page-section projects" id="projects">
            <h2 className="page-title">Projects</h2>
            <div className="project-grid">
                <AnimatedDiv hover className="glass-card project-card">
                    <p className="card-kicker">Project 01</p>
                    <h3 className="card-heading">This portfolio</h3>
                    <ul className="card-list">
                        <li>Modern portfolio website made using React</li>
                        <li>Implemented smooth animations using Framer Motion.</li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card project-card">
                    <p className="card-kicker">Project 02</p>
                    <h3 className="card-heading">API Currency Calculator</h3>
                    <ul className="card-list">
                        <li>Created an intuitive currency converter application connecting to real-time financial APIs. </li>
                        <li>Optimized response caching and interactive client-side mathematical calculations. </li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card project-card">
                    <p className="card-kicker">Project 03</p>
                    <h3 className="card-heading">AI Schedule Maker</h3>
                    <ul className="card-list">
                        <li>Built an AI chat app using React, TypeScript, Node.js, and Gemini API.</li>
                        <li>Added contextual chat and message history.</li>
                        <li>In development.</li>
                    </ul>
                    <a className="card-action" href="https://github.com/pepsikolnyj/AI_Chat_Bot" target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">→</span></a>
                </AnimatedDiv>
            </div>
        </section>
  );
}
