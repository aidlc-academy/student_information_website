import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Since this is frontend only, we'll just show a success message
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="page-title">Contact Me</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>johndoe@example.com</p>
            </div>
            <div className="info-item">
              <h3>📱 Phone</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="info-item">
              <h3>📍 Location</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {submitted && (
                <div className="success-message">
                  Message sent successfully! (Demo mode)
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
