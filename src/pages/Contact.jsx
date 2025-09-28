import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // For now, just log the form data and redirect
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });
    
    // Redirect to home page
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you! Get in touch to discuss opportunities or collaborations.</p>
        </div>
        
        <div className="contact-content">

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell me about your project or how I can help you..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            
            <div className="contact-method">
              <div className="contact-icon">
                <img src="https://www.svgrepo.com/show/387989/mail.svg" alt="LinkedIn" />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:ssin1949@my.centennialcollege.ca">ssin1949@my.centennialcollege.ca</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <img src="https://www.svgrepo.com/show/336068/phone-call.svg" alt="LinkedIn" />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+14377792324">(437) 779-2324</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <img src="https://www.svgrepo.com/show/408372/location-pin-map.svg" alt="LinkedIn" />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <span>Toronto, ON, Canada</span>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" />
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/sandeep-singh-1010" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sandeep-singh-1010
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="LinkedIn" />
              </div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/Sandeepsingh1010" target="_blank" rel="noopener noreferrer">
                  github.com/Sandeepsingh1010
                </a>
              </div>
            </div>
          </div>
          

        </div>
        
        <div className="booking-section">
          <h2>Book a Meeting</h2>
          <iframe
            src="https://outlook.office.com/bookwithme/user/5ed4478e66cc415a8347edb0b5e749d6@my.centennialcollege.ca/meetingtype/1ghicY7W90-uIdXq7SyIKg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
            style={{ width: "100%", height: "700px", border: "none" }}
            title="Microsoft Bookings"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;