import "../Css/Projects.css";
import screenshot1 from "../Images/Screenshot 2025-10-20 154712.png";
import screenshot2 from "../Images/Screenshot 2025-10-20 154807.png";
import screenshot3 from "../Images/Screenshot 2025-10-31 142205.png";

function Projects() {
  // Add your website links here
  const project1Link = "https://hood-car-rentals.vercel.app"; // Add Car Rental Website link here
  const project2Link = "https://hood-shop.vercel.app"; // Add E-commerce Store link here
  const project3Link = "https://leave-application-murex.vercel.app"; // Leave Application System

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {/* Project 1 - Car Rental Website */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img
              src={screenshot1}
              alt="Car Rental Website"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h2 className="project-name">Car Rental Website</h2>
            <p className="project-description">
              A modern car rental platform with search functionality and booking system.
            </p>
            <a
              href={project1Link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Project 2 - E-commerce Clothing Store */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img
              src={screenshot2}
              alt="E-commerce Clothing Store"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h2 className="project-name">E-commerce Clothing Store</h2>
            <p className="project-description">
              An online clothing store featuring seasonal collections and shopping cart.
            </p>
            <a
              href={project2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              View Website
            </a>
          </div>
        </div>

        {/* Project 3 - Leave Application System */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img
              src={screenshot3}
              alt="Leave Application System"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h2 className="project-name">Leave Application System</h2>
            <p className="project-description">
              A comprehensive leave management system for tracking and managing employee leave requests.
            </p>
            <a
              href={project3Link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
