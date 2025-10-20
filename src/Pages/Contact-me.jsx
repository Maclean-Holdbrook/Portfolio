import '../Css/Contact-me.css'

function Contactme() {
  return (
    <div className="contact-page">
      <h1 className='title'>Contact Me</h1>
      <p>I'd love to connect with you! Here are my contact details and social profiles:</p>

      <div className="contact-details">
        <p className='email'><strong>Email:</strong> <a href="mailto:macleaann723@gmail.com" aria-label="Send email to Maclean">macleaann723@gmail.com</a></p>
        <p className='number'><strong>Phone:</strong> <a href="tel:+233535079564" aria-label="Call Maclean">+233 20 928 7952</a></p>
      </div>

      <div className="social-links">
        <h3>Follow Me</h3>
        <ul>
          {/* <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">LinkedIn</a></li> */}
          <li><a href="https://github.com/Maclean-Holdbrook" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">GitHub</a></li>
          {/* <li><a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile">Instagram</a></li> */}
          {/* <li><a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" aria-label="Visit my TikTok profile">TikTok</a></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contactme;
