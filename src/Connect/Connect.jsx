import './Connect.css'; 

const Contact = () => {
  return (
        <section id='contact'>
        <div className="contact-info-container ">
          <h3>Find Me Here</h3>
          <div className="contact-details">
            <p className="contact-item">
              <span className="icon">📍</span> Location: Hindupuram, Andhra Pradesh, India
            </p>
            <p className="contact-item">
              <span className="icon">📧</span> Email: <a href="mailto:shaikaman2411@example.com">shaikaman2411@gmail.com</a>
            </p>
           
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/aman-shaik7" target="_blank" rel="noopener noreferrer" className="social-icon">
             
              <span className="icon">🔗</span> LinkedIn
            </a>
            <a href="https://github.com/ShaikAman733" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span className="icon">🔗</span> GitHub
            </a>
            
          </div>
        </div>
    </section>
  );
};

export default Contact;
