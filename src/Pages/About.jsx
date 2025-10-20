import "../Css/About.css";

function About(){
    return (
      <section className="about-section">
        <header className="about-header">
          <h1>About Me</h1>
        </header>
        <div className="about-content">
          <p>
            Hi, I’m Ebenezer Maclean Holdbrook — a Full Stack Web Developer
            passionate about building powerful, user-friendly web applications
            from the ground up. With a solid foundation in both front-end and
            back-end technologies, I specialize in crafting responsive,
            scalable, and efficient digital solutions that meet real-world
            needs.
          </p>

          <h2>What I Do</h2>
          <p>
            From concept to deployment, I handle every stage of the web
            development lifecycle. I work with a wide range of technologies,
            including:
          </p>
          <ul>
            <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React</li>
            <li><strong>Back-end:</strong> Node.js, Express</li>
            <li><strong>Databases:</strong> PostgreSQL</li>
            <li><strong>DevOps & Tools:</strong> Git, Docker, AWS, CI/CD pipelines, RESTful APIs</li>
          </ul>
          <p>
            Whether I’m developing a custom CMS, integrating third-party APIs, or
            optimizing site performance, I’m always focused on delivering
            clean, maintainable code and a smooth user experience.
          </p>

          <h2>My Philosophy</h2>
          <p>
            I believe great web development is about more than just writing code
            — it’s about solving problems. I take time to understand the "why"
            behind every project, collaborating closely with clients and teams to
            create solutions that are not only functional but also meaningful and
            intuitive.
          </p>

          <h2>A Bit More About Me</h2>
          <p>
            When I’m not coding, you’ll find me learning new skills to make my
            life and that of others reliable. I’m always curious, always
            learning, and always ready to take on the next challenge.
          </p>

          <h2>Let’s Build Something Great</h2>
          <p>
            Looking for someone to bring your idea to life or join your
            development team? I’m open to freelance work, collaboration, or
            full-time opportunities. Let’s connect and make something awesome
            together.
          </p>
        </div>
      </section>
    )
}
export default About