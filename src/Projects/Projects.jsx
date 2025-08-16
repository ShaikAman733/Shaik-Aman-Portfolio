import React, { useState } from 'react';
import './Projects.css';
import enzo from '/assets/enzo.png'
import collegecampus from '/assets/college.png'
import games from '/assets/gamepic.jpg'
import { FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Enzo - Your AI Health Helper',
        description: 'An AI-powered chatbot is designed to offer basic suggestions for common health symptoms. The project serves as a practical example of web development, seamlessly blending a user-friendly interface with a helpful, real-world application.',
        imageUrl:enzo,
        projectUrl: 'https://enzo-chatbot-rust.vercel.app/',
        tech: ['react', 'css', 'js'],
    },
    {
        id: 2,
        title: 'College campus chatbot',
        description: 'Developing a smart college campus chatbot to assist students with queries related to schedules, faculty, and campus services with modular architecture for easy expansion and smooth integration of future campus features.',
        imageUrl: collegecampus,
        projectUrl: 'https://violet-erinn-31.tiiny.site/',
        tech: ['html', 'css', 'js'],
    },
    {
        id: 3,
        title: 'Interactive Games',
        description: 'Developed a fully functional Tic Tac Toe application using JavaScript, implementing game logic, user interaction, and a dynamic UI for an engaging two-player experience.',
        imageUrl:games,
        projectUrl: 'https://tic-tac-toe-tau-black.vercel.app/',
        tech: ['html', 'css', 'js'],
    },
];

const getTechIcon = (techName) => {
    switch (techName) {
        case 'react':
            return <FaReact />;
        case 'js':
            return <FaJs />;
        case 'html':
            return <FaHtml5 />;
        case 'css':
            return <FaCss3Alt />;
        default:
            return null;
    }
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects">
            <h2 className='fade'>Projects</h2>
            <div className="projects-container ">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={project.imageUrl} alt={`${project.title} Image`} className="project-image" />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {/* New tech icons section */}
                            <div className="tech-icons">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-icon">
                                        {getTechIcon(tech)}
                                    </span>
                                ))}
                            </div>
                            <a href={project.projectUrl} className="project-link" target="_blank">
                                View Project <FaExternalLinkAlt className="link-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-buttons ">
                <button
                    id="prevBtn"
                    className="carousel-button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>
                <span id="project-counter" className="project-counter">
                    {currentIndex + 1} of {projects.length}
                </span>
                <button
                    id="nextBtn"
                    className="carousel-button"
                    onClick={handleNext}
                    disabled={currentIndex === projects.length - 1}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Projects;