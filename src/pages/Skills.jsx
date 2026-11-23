import AnimatedDiv from "../animate/AnimatedDiv";

export default function Skills(){
    return (
        <section className="page-section skills">
            <h2 className="page-title">Skills</h2>
            <div className="skill-grid">
                <AnimatedDiv hover className="glass-card skill-card">
                    <p className="card-kicker">Specialisation</p>
                    <h3 className="card-heading">Front-end</h3>
                    <ul className="card-list">
                        <li>React</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 / CSS3</li>
                    </ul>
                    <p className="card-note"><strong>Currently learning:</strong> TypeScript and Node.js</p>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card skill-card">
                    <p className="card-kicker">Specialisation</p>
                    <h3 className="card-heading">Back-end</h3>
                    <ul className="card-list">
                        <li>PHP</li>
                    </ul>
                    <p className="card-note"><strong>Currently learning:</strong> Node.js</p>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card skill-card">
                    <p className="card-kicker">Workflow</p>
                    <h3 className="card-heading">Databases & tools</h3>
                    <ul className="card-list">
                        <li>SQL / MySQL</li>
                        <li>Git / GitHub</li>
                    </ul>
                </AnimatedDiv>
            </div>
        </section>
    );
}
