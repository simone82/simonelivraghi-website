import './Values.css';

const Values = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Striving for the highest standards in every project and continuously improving technical skills.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Building strong teams and fostering environments where everyone can contribute their best work.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions to solve complex problems effectively.'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Staying curious and constantly expanding knowledge in AI, software engineering, and emerging tech.'
    },
    {
      icon: '🌱',
      title: 'Mentorship',
      description: 'Sharing knowledge and helping others grow in their careers through guidance and support.'
    },
    {
      icon: '⚡',
      title: 'Impact',
      description: 'Creating technology solutions that make a meaningful difference in people\'s lives and businesses.'
    }
  ];

  const interests = [
    'Open Source Contribution',
    'AI Research Papers',
    'Tech Conferences & Meetups',
    'Competitive Programming',
    'Technical Writing',
    'Cloud Architecture',
    'Quantum Computing',
    'Blockchain Technology'
  ];

  return (
    <section id="values" className="section values-section">
      <div className="container">
        <h2 className="section-title">Values & Interests</h2>
        
        <div className="values-content">
          <div className="core-values">
            <h3 className="subsection-title">Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="interests-section">
            <h3 className="subsection-title">Professional Interests</h3>
            <div className="interests-container">
              {interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h3 className="subsection-title">My Philosophy</h3>
            <blockquote className="philosophy-quote">
              "Technology should be a force for good, solving real problems and making the world more 
              connected, efficient, and accessible. As engineers, we have the responsibility to build 
              systems that are not just functional, but ethical, scalable, and human-centered."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;