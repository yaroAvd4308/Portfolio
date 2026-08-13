import AnimatedDiv from "../animate/AnimatedDiv"

export default function Projects() {
  return (
        <section className="page-section projects" id="projects">
            <h2 className="page-title">Projects</h2>
            <div className="project-grid">
                <AnimatedDiv hover className="glass-card project-card">
                    <h3 className="card-title">Project 1: This portfolio</h3>
                    <ul>
                        <li>Modern portfolio website made using React</li>
                        <li>Implemented smooth animations using Framer Motion.</li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card project-card">
                    <h3 className="card-title">Project 2: API Currency Calculator</h3>
                    <ul>
                        <li>Created an intuitive currency converter application connecting to real-time financial APIs. </li>
                        <li>Optimized response caching and interactive client-side mathematical calculations. </li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card project-card">
                    <h3 className="card-title">Project 3: AI Schedule Maker</h3>
                    <ul>
                        <li>Built a full-stack AI chat application using React, TypeScript, Node.js, and the Gemini API.</li>
                        <li>Implemented contextual conversations, secure server-side API requests, and an interactive message history.</li>
                        <li>Still in development. More info about my plans at <a href="https://github.com/pepsikolnyj/AI_Chat_Bot">GitHub</a>.</li>
                    </ul>
                </AnimatedDiv>
            </div>
        </section>
  );
}
