import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Natural Language Processing',
        'Computer Vision',
        'Deep Learning',
        'Reinforcement Learning',
      ],
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript/TypeScript', 'Java', 'C++', 'Go', 'Rust', 'SQL'],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS',
        'Google Cloud',
        'Azure',
        'Docker',
        'Kubernetes',
        'Terraform',
        'CI/CD',
        'Microservices',
      ],
    },
    {
      title: 'Architecture & Design',
      skills: [
        'System Design',
        'Distributed Systems',
        'Event-Driven Architecture',
        'API Design',
        'Design Patterns',
        'Performance Optimization',
      ],
    },
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
