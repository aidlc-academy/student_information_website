import './Education.css'

function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'ABC University',
      duration: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Web Development. Active member of coding club and participated in various hackathons.'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'XYZ High School',
      duration: '2018 - 2020',
      grade: 'Percentage: 92%',
      description: 'Completed with Science stream (PCM). Received award for best performance in Computer Science.'
    },
    {
      degree: 'Secondary Education',
      institution: 'XYZ High School',
      duration: '2017 - 2018',
      grade: 'Percentage: 88%',
      description: 'Completed with distinction. Active participation in science exhibitions and coding competitions.'
    }
  ]

  return (
    <div className="education">
      <div className="education-container">
        <h1 className="page-title">Education</h1>
        <div className="timeline">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <div className="timeline-meta">
                  <span className="duration">{edu.duration}</span>
                  <span className="grade">{edu.grade}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
