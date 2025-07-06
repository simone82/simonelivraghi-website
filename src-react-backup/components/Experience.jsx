import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior AI Systems Architect',
      company: 'Tech Innovation Labs',
      period: '2021 - Present',
      description:
        'Leading the design and implementation of enterprise-scale AI solutions, managing a team of 12 engineers, and driving architectural decisions for ML platforms.',
      achievements: [
        'Reduced model inference time by 70% through optimization',
        'Led migration to cloud-native architecture saving $2M annually',
        'Implemented MLOps pipeline serving 100M+ predictions daily',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AI Startup Inc',
      period: '2018 - 2021',
      description:
        'Developed and deployed production ML models for NLP and computer vision applications, collaborated with cross-functional teams on product features.',
      achievements: [
        'Built recommendation engine increasing user engagement by 45%',
        'Developed custom NLP pipeline for sentiment analysis',
        'Optimized model training reducing costs by 60%',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Enterprise Solutions Corp',
      period: '2015 - 2018',
      description:
        'Full-stack development of enterprise applications, introduced AI capabilities to legacy systems, mentored junior developers.',
      achievements: [
        'Migrated monolithic application to microservices',
        'Improved system performance by 3x through optimization',
        'Led adoption of CI/CD practices across teams',
      ],
    },
  ]

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="cv-link">
          <a
            href="https://linkedin.com/in/simonelivraghi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full CV on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
