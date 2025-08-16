
import './Aboutme.css'

function About() {
    return (
        <>
         <h2 className="text fade">
                    About Me
                    <span className="absolute "></span>
                </h2>
        <section id="about">
            <div className="container-about ">
               
                <div className="flex">
                    <div className="about-text ">
                        <p className="shortintro ">I'm a passionate Data Science student at R.L. Jalappa Institute, affiliated with Visvesvaraya Technological University (VTU), Doddaballapur.</p>

                        <p className="shortintro ">Skilled in JavaScript, Python and React, I’m currently expanding my expertise in the MERN stack while deepening my knowledge of data analysis and visualization. My focus is on building impactful tools and solutions that blend full-stack development with data-driven insights</p>
                    </div>
                </div>
            </div>
            <div className="about-stats ">
                <div className="stat-card ">
                    <h3>4</h3>
                    <p >Projects</p>
                </div>
                <div className="stat-card ">
                    <h3>2</h3>
                    <p >Certifications</p>
                </div>
                <div className="stat-card ">
                    <h3 >500+</h3>
                    <p >LinkedIn Connections</p>
                </div>
                <div className="stat-card ">
                    <h3 >100+</h3>
                    <p >Codewar</p>
                </div>
            </div>
        </section>
        </>
    );

}


export default About;
