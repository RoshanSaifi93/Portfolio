import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact fade-in" id="contact">
      <h2 className="section-title fade-in">Get In Touch</h2>

      <div className="contact-container">
        {/* Left */}
        <div className="contact-info fade-left">
          <p>
            I’m currently open to frontend developer opportunities and freelance
            work. Feel free to reach out if you want to collaborate or just say
            hi.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:roshansaifi.dev@gmail.com">
                roshansaifi.dev@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/RoshanSaifi93"
                target="_blank"
              >
                github.com/roshan-github
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/roshan-saifi-104619382/"
                target="_blank"
              >
                linkedin.com/in/roshan-linkedin
              </a>
            </p>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form fade">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
