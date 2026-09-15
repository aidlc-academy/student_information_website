import './Skills.css'

function Skills() {
  const skills = [
    { name: 'HTML', level: 90, color: '#e34c26' },
    { name: 'CSS', level: 85, color: '#264de4' },
    { name: 'JavaScript', level: 80, color: '#f0db4f' },
    { name: 'React', level: 75, color: '#61dafb' },
    { name: 'Java', level: 70, color: '#007396' },
    { name: 'Python', level: 75, color: '#306998' },
    { name: 'C++', level: 65, color: '#00599c' }
  ]

  return (
    <div className="skills">
      <div className="skills-container">
        <h1 className="page-title">My Skills</h1>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
