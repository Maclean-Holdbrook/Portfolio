import "../Css/Service.css";

// function Service() {
//   return (
//     <>
//       <div className="service-title">
//         <h1 className="name"> WHAT I OFFER</h1>
//       </div>
//       <div className="service-container">
//         <div className="service1">
//           <h2>Frontend Development</h2>
//           <ul>
//             <li>Intuitive and responsive UI using React, Vue, or Angular</li>
//             <li>Cross-browser compatibility and accessibility</li>
//             <li>Tailwind CSS, Bootstrap, or custom design system</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Service;

function Service() {
  return (
    <>
      <div className="service-title">
        <h2>WHAT I OFFER</h2>
      </div>
      <div className="service-container">
        <div className="service1">
          <h2>Frontend Development</h2>
          <ol>
            <li>Intuitive and responsive UI using React, Vue, or Angular</li>
            <li>Cross-browser compatibility and accessibility</li>
            <li>Tailwind CSS, Bootstrap, or custom design system</li>
          </ol>
        </div>

        <div className="service2">
          <h2>Backend Development</h2>
          <ol>
            <li>RESTful APIs and GraphQL endpoints</li>
            <li>Secure server-side logic with Node.js, Express</li>
            <li>Database integration with PostgreSQL</li>
          </ol>
        </div>

        <div className="service3">
          <h2>DevOps & Deployment</h2>
          <ol>
            <li>CI/CD setup (GitHub Actions, GitLab CI, etc.)</li>
            <li>Containerization with Docker</li>
            <li>Cloud hosting (AWS, Vercel, Netlify, DigitalOcean)</li>
          </ol>
        </div>
      </div>

       <div className="service-container1">
           
              <div className="service4">
                <h2>Full Stack Integration</h2>
                <ol>
                  <li>Single Page Applications (SPAs)</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>
                    Authentication & Authorization (OAuth, JWT, Firebase Auth)
                  </li>
                </ol>
              </div>

              <div className="service5">
                <h2>Tech Stack</h2>
                <ol>
                  <li>Languages:JavaScript,SQL</li>
                  <li>Frontend:React,HTML/CSS</li>
                  <li>Backend:Node.js, Express</li>
                </ol>
              </div>
            </div>
         
    </>
  );
}

export default Service;
