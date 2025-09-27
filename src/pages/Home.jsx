import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <h2 className="hero-subtitle">Sandeep Singh</h2>
          <p className="hero-description">
            Cross Industry skillset CAD/CAM + Software Engineering AI
          </p>
          
          <div className="mission-statement">
            <h3>Mission Statement</h3>
            <p>
              Bridging 10+ years of mechanical design expertise with cutting-edge software development 
              to deliver innovative solutions. I leverage extensive CAD/CAM/PLM experience alongside 
              modern AI and software engineering skills to drive digital transformation and create 
              value through technology.
            </p>
          </div>
          
          <div className="cta-buttons">
            <Link to="/about" className="cta-button primary">
              Learn About Me
            </Link>
            <Link to="/projects" className="cta-button secondary">
              View My Projects
            </Link>
          </div>
        </div>
      </div>
      
      <div className="home-highlights">
        <div className="highlight-card">
          <h3>Engineering Excellence</h3>
          <p>10+ years in mechanical design and CAD/CAM systems</p>
        </div>
        <div className="highlight-card">
          <h3>Software Innovation</h3>
          <p>AI-focused software engineering with hands-on project experience</p>
        </div>
        <div className="highlight-card">
          <h3>Digital Transformation</h3>
          <p>Leading process optimization and automation initiatives</p>
        </div>
      </div>
    </div>
  );
};

export default Home;