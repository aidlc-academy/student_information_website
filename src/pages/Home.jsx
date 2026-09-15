import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="name-highlight">John Doe</span>
          </h1>
          <h2 className="home-subtitle">Computer Science Student</h2>
          <p className="home-description">
            I'm a passionate computer science student specializing in web development
            and software engineering. I love building projects that solve real-world problems.
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
