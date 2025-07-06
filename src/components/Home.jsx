import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Simone Livraghi</span>
          </h1>
          <p className="home-subtitle">
            AI Systems Engineer & Software Architect
          </p>
          <p className="home-location">
            Based in Milan, Italy
          </p>
          <div className="home-cta">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
          <div className="home-links">
            <a 
              href="https://linkedin.com/in/simonelivraghi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View my LinkedIn profile"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/simonelivraghi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View my GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;