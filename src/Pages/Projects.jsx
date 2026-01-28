import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Projects.css';
import sellghImg from '../Images/sellgh.png';
import leaveAppImg from '../Images/leave-app.png';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: "SELLGH",
            description: "Developed a multi-vendor e-commerce platform with vendor dashboards, customer shopping flow, role-based access control, and RESTful APIs.",
            image: sellghImg,
            url: "https://sellgh.vercel.app"
        },
        {
            id: 2,
            name: "Life Hospital Leave Application",
            description: "A comprehensive leave management system for Life Hospital staff members to apply for and manage leave requests.",
            image: leaveAppImg,
            url: "https://leave-application-murex.vercel.app/",
            requiresAuth: true
        }
    ];

    return (
        <div className="projects-section">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-grid">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-info">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>

                            {project.requiresAuth && (
                                <div className="credentials-note">
                                    <p><strong>Access Required:</strong></p>
                                    <p>This system requires staff or admin authentication.</p>
                                    <p>Please <Link to="/hire" style={{ color: 'crimson', textDecoration: 'underline' }}>contact me</Link> to request test credentials.</p>
                                </div>
                            )}

                            <a
                                href={project.url}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
