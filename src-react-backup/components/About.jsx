import './About.css'

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an experienced AI Systems Engineer and Software Architect with over 10 years in
              the technology industry. My passion lies in designing and implementing innovative
              AI-driven solutions that solve complex business challenges.
            </p>
            <p>
              Throughout my career, I've led cross-functional teams, architected scalable systems,
              and delivered cutting-edge AI applications across various industries. My expertise
              spans from low-level system design to high-level architecture, with a particular focus
              on machine learning, natural language processing, and cloud-native applications.
            </p>
            <p>
              I believe in continuous learning and staying at the forefront of technological
              advancement. When I'm not coding or architecting systems, you'll find me exploring the
              latest AI research papers, contributing to open-source projects, or mentoring aspiring
              engineers.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>10+ Years</h3>
              <p>Professional Experience</p>
            </div>
            <div className="highlight-card">
              <h3>50+ Projects</h3>
              <p>Successfully Delivered</p>
            </div>
            <div className="highlight-card">
              <h3>15+ Teams</h3>
              <p>Led & Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
