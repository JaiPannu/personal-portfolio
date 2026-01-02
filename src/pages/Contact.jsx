import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a href="mailto:js3pannu@uwaterloo.ca" className="contact-button">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
