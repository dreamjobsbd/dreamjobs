


export const picture = "formal.webp";

export const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Portfolio</title>
  </head>
  <body>
    <header class="header">
      <nav class="header-content">
        <a href="" class="logo">About<span class="highlight">ME.</span></a>
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
        <div class="nav-links">
          <a href="" class="nav-link">Home</a>
          <a href="#aboute" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </nav>
    </header>

    <section id="cover">
      <div class="cover-content">
        <div class="profile-img">
          <img src="formal.webp" alt="Profile Picture" />
        </div>
        <h2 class="title">Hello, I am <span class="highlight">"your name here"</span></h2>
        <p class="subtitle">I am a "your designation"</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/" target="_blank" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/"  target="_blank" class="social-icon"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/" target="_blank"  class="social-icon"><i class="fa-brands fa-square-twitter"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"  class="social-icon"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </section>



    <section id="skills">
      <div class="container">
        <h2 class="section-title">My <span class="highlight">Skills</span></h2>
        <div class="skills-content">
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill One</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 90%">
                <i class="fa-brands fa-html5 skill-icon"></i>
              </div>
            </div>
          </div>
    
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill Two</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%">
                <i class="fa-brands fa-css3-alt skill-icon"></i>
              </div>
            </div>
          </div>
    
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill Three</span>
              <span class="skill-percentage">80%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 80%">
                <i class="fa-brands fa-js skill-icon"></i>
              </div>
            </div>
          </div>
    
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill Four</span>
              <span class="skill-percentage">75%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 75%">
                <i class="fa-brands fa-react skill-icon"></i>
              </div>
            </div>
          </div>
    
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill Five</span>
              <span class="skill-percentage">70%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 70%">
                <i class="fa-brands fa-node-js skill-icon"></i>
              </div>
            </div>
          </div>
    
          <div class="skill-card">
            <div class="skill-info">
              <span class="skill-name">Skill Six</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 85%">
                <i class="fa-brands fa-git-alt skill-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="contact">
      <div class="container">
        <h2 class="section-title">Get in <span class="highlight">Touch</span></h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:youremail@gmail.com">youremail@gmail.com</a></p>
            </div>
    
            <div class="contact-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+8801999999999">+880 1999 999 999</a></p>
              <p><a href="tel:+8801777777777">+880 1777 777 777</a></p>
            </div>
    
            <div class="contact-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h3>Address</h3>
              <p>15/10, Bansree</p>
              <p>Dhaka-1214, Bangladesh</p>
            </div>
          </div>
    
          <div class="contact-form">
            <h3>Send Message</h3>
            <form id="contactForm">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="submit-btn" onclick="alert('The form does not support to send message, contact to dreamjobs')">
                Send Message
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>


  </body>
</html>`;



export const cssContent = `
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  scroll-behavior: smooth;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


/* Header Styles */
.header {
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.highlight {
  color: #facc15;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #facc15;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Cover Section */
#cover {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.cover-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.profile-img {
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  position: relative;
}

.profile-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #facc15;
  transition: transform 0.3s ease;
}

.profile-img:hover img {
  transform: scale(1.05);
}

.title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  color: #d1d5db;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-icon {
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #facc15;
  transform: translateY(-3px);
}

/* Mobile Navigation */
.nav-toggle {
  display: none;
}

.nav-toggle-label {
  display: none;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-toggle-label {
    display: block;
    padding: 1rem;
    position: relative;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: #1a1a1a;
    height: 2px;
    width: 2rem;
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: '';
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 7px;
  }

  .nav-toggle-label span::after {
    top: 7px;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    width: 100%;
    display: none;
    flex-direction: column;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-toggle:checked ~ .nav-links {
    display: flex;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .profile-img {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 1rem 3%;
  }

  .title {
    font-size: 1.75rem;
  }

  .social-icons {
    gap: 1rem;
  }
}



/* Skills Section */

#skills {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.skills-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: #1a1a1a;
}

.skill-percentage {
  color: #facc15;
  font-weight: 600;
}

.progress-bar {
  background-color: #e9ecef;
  border-radius: 50px;
  height: 10px;
  overflow: hidden;
  position: relative;
}

.progress {
  background: linear-gradient(90deg, #facc15 0%, #fbbf24 100%);
  height: 100%;
  border-radius: 50px;
  position: relative;
  transition: width 1s ease-in-out;
}

.skill-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}

/* Animation for progress bars */
@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: var(--width);
  }
}

.progress {
  animation: slideIn 1.5s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .skills-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  #skills {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .skill-card {
    padding: 1rem;
  }
}



/*contact section*/

/* Contact Section */
#contact {
  padding: 5rem 0;
  background-color: #ffffff;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-top: 3rem;
}

/* Contact Info Cards */
.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.contact-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #facc15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-wrapper i {
  color: white;
  font-size: 1.25rem;
}

.contact-card h3 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.contact-card p {
  margin: 0.25rem 0;
  color: #4b5563;
}

.contact-card a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #facc15;
}

/* Contact Form */
.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.contact-form h3 {
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: white;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-family: inherit;
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #facc15;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background: #facc15;
  color: #1a1a1a;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover {
  background: #fbbf24;
  transform: translateY(-2px);
}

.submit-btn i {
  transition: transform 0.3s ease;
}

.submit-btn:hover i {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  #contact {
    padding: 3rem 0;
  }

  .contact-form {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1.25rem;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .contact-form h3 {
    font-size: 1.25rem;
  }

  .submit-btn {
    padding: 0.6rem;
  }
}`;