import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with cart functionality and product filtering.',
      technologies: ['React', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application that displays current weather conditions and forecasts.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: '#'
    },
    {
      title: 'Task Manager',
      description: 'A productivity app to manage daily tasks with priority levels and due dates.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with responsive design.',
      technologies: ['React', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Quiz Application',
      description: 'Interactive quiz app with multiple categories and score tracking.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication and message history.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#'
    }
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
