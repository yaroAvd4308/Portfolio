import AnimatedDiv from "../animate/AnimatedDiv";

export default function Skills(){
    return (
        <section className="page-section skills">
            <h2 className="page-title">Skills</h2>
            <div className="skill-grid">
                <AnimatedDiv hover className="glass-card skill-card">
                    <h3 className="card-title">Front-end</h3>
                    <ul>
                        <li>React</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 / CSS3</li>
                    </ul>
                    <h3 className="card-title">Currently Learning: </h3>
                    <ul>
                        <li>TypeScript</li>
                        <li>NodeJS</li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card skill-card">
                    <h3 className="card-title">Back-end</h3>
                    <ul>
                        <li>PHP</li>
                    </ul>
                    <h3 className="card-title">Currently Learning: </h3>
                    <ul>
                        <li>NodeJS</li>
                    </ul>
                </AnimatedDiv>
                <AnimatedDiv hover className="glass-card skill-card">
                    <h3 className="card-title">Databases & tools</h3>
                    <ul>
                        <li>SQL / MySQL</li>
                        <li>Git / GitHub</li>
                    </ul>
                </AnimatedDiv>
            </div>
        </section>
    );
}
