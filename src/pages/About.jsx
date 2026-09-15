import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="page-title">About Me</h1>
        <div className="about-content">
          <div className="about-card">
            <h2>Who Am I?</h2>
            <p>
              I'm John Doe, a dedicated Computer Science student with a passion for 
              technology and innovation. I specialize in web development and love creating 
              user-friendly applications that make a difference.
            </p>
          </div>
          <div className="about-card">
            <h2>My Journey</h2>
            <p>
              My journey in computer science began in high school when I built my first 
              website. Since then, I've been continuously learning and expanding my 
              skills in various programming languages and frameworks.
            </p>
          </div>
          <div className="about-card">
            <h2>What I Do</h2>
            <p>
              I work on web development projects, build mobile applications, and explore 
              new technologies. I'm always eager to learn and take on new challenges 
              that help me grow as a developer.
            </p>
          </div>
          <div className="about-card">
            <h2>My Goals</h2>
            <p>
              My goal is to become a full-stack developer and work on projects that 
              positively impact people's lives. I aim to contribute to open-source 
              projects and build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
