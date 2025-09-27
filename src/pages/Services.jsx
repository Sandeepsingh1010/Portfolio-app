import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "CAD/CAM Engineering",
      icon: "⚙️",
      description: "Expert-level CAD/CAM services using Siemens NX, including template development, engineering standards library management, and 3D modeling.",
      features: [
        "Siemens NX Design & Development",
        "PLM Implementation & Management",
        "Engineering Standards Development",
        "3D Modeling & Simulation"
      ]
    },
    {
      id: 2,
      title: "Software Development & Automation",
      icon: "💻",
      description: "Custom software solutions and automation development using modern technologies and programming languages.",
      features: [
        "C#, Java, Python Development",
        "NX-Open API Integration",
        "Process Automation Solutions",
        "AI & Machine Learning Applications"
      ]
    },
    {
      id: 3,
      title: "Manufacturing Process Optimization",
      icon: "📊",
      description: "Comprehensive manufacturing process analysis and optimization using Lean, Six Sigma, and modern quality control methodologies.",
      features: [
        "Lean & Six Sigma Implementation",
        "G-code Programming & Optimization",
        "Quality Control Systems",
        "OEE Improvement Strategies"
      ]
    },
    {
      id: 4,
      title: "Digital Transformation Consulting",
      icon: "🚀",
      description: "Guide organizations through digital transformation initiatives, ERP implementations, and Industry 4.0 adoption.",
      features: [
        "ERP System Implementation",
        "Microsoft Dynamics Expertise",
        "Azure Cloud Solutions",
        "Digital Workflow Optimization"
      ]
    },
    {
      id: 5,
      title: "Web Development",
      icon: "🌐",
      description: "Modern web applications using React, JavaScript, and responsive design principles for business solutions.",
      features: [
        "React & JavaScript Development",
        "Responsive Web Design",
        "Database Integration",
        "Cloud-based Applications"
      ]
    },
    {
      id: 6,
      title: "Technical Training & Mentoring",
      icon: "🎓",
      description: "Provide technical training and mentoring services for engineering teams and software development practices.",
      features: [
        "Team Leadership & Mentoring",
        "Technical Training Programs",
        "Best Practices Development",
        "Knowledge Transfer Sessions"
      ]
    }
  ];

  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h1>My Services</h1>
          <p>
            I offer a unique blend of engineering expertise and software development skills 
            to help organizations bridge traditional manufacturing with modern technology solutions.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="service-cta">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how my unique combination of engineering expertise and software 
              development skills can help solve your challenges and drive innovation in your organization.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Get In Touch
              </a>
              <a href="/about" className="cta-button secondary">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="expertise-summary">
          <h2>Areas of Expertise</h2>
          <div className="expertise-tags">
            <span className="expertise-tag">Siemens NX</span>
            <span className="expertise-tag">CAD/CAM</span>
            <span className="expertise-tag">PLM</span>
            <span className="expertise-tag">C# Development</span>
            <span className="expertise-tag">Java</span>
            <span className="expertise-tag">Python</span>
            <span className="expertise-tag">React</span>
            <span className="expertise-tag">Machine Learning</span>
            <span className="expertise-tag">Microsoft Dynamics</span>
            <span className="expertise-tag">Azure</span>
            <span className="expertise-tag">Lean Six Sigma</span>
            <span className="expertise-tag">Process Optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;