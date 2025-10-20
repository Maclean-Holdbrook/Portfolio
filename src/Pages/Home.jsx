import { Link } from "react-router-dom";
import "../Css/Home.css";
import "../Css/Button.css";
import photo from "../Images/portfolio photo.jpg";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="content">
            <h1 className="name">Hi, I&apos;m Maclean</h1>
            <h2 className="occupation">A Full Stack Web Developer</h2>
            <p className="lead">
              I&apos;m a full stack web developer with a strong foundation in both
              front-end and back-end technologies. I specialize in building
              responsive, user-focused web applications using tools like
              JavaScript, React, Node.js, and Postgres. My approach combines
              clean code, scalable architecture, and a focus on delivering
              real-world solutions. Whether working solo or with a team, I aim
              to bridge design and functionality to create seamless digital
              experiences.
            </p>
            <div className="buttons">
              <Link to="/hire">
                <button type="button" aria-label="Go to contact page">Contact Me</button>
              </Link>

              <Link to="/resume">
                <button type="button" aria-label="View my resume">Resume</button>
              </Link>
            </div>
          </div>

          <img className="image" src={photo} alt="my photo" />
        </div>
      </div>
    </>
  );
}

export default Home;
