import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description:
        'Built a real-time analytics platform using machine learning to predict user behavior and optimize business outcomes.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker'],
      highlights: [
        'Reduced prediction latency by 70%',
        'Processed 10M+ events daily',
        'Achieved 95% accuracy in behavior prediction',
      ],
    },
    {
      title: 'Natural Language Processing Engine',
      description:
        'Developed a custom NLP engine for document understanding and automated information extraction.',
      technologies: ['PyTorch', 'BERT', 'FastAPI', 'Kubernetes', 'PostgreSQL'],
      highlights: [
        'Processed 100K+ documents monthly',
        'Multi-language support (12 languages)',
        '98% extraction accuracy',
      ],
    },
    {
      title: 'Distributed ML Training Framework',
      description:
        'Created a framework for distributed machine learning model training across multiple cloud providers.',
      technologies: ['Python', 'Ray', 'Apache Spark', 'Multi-Cloud', 'gRPC'],
      highlights: [
        'Reduced training time by 5x',
        'Seamless multi-cloud deployment',
        'Cost optimization algorithms',
      ],
    },
    {
      title: 'Computer Vision Quality Control System',
      description:
        'Implemented an automated quality control system using computer vision for manufacturing.',
      technologies: ['OpenCV', 'PyTorch', 'Edge Computing', 'C++', 'MQTT'],
      highlights: [
        'Real-time processing at 60 FPS',
        '99.9% defect detection rate',
        'Reduced manual inspection by 80%',
      ],
    },
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-highlights">
                <h4 className="highlights-title">Key Achievements:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
