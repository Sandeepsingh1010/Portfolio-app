import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Transformation & ERP Implementation",
      image: "/project-images/digital-transformation.jpg",
      description: "Led digital transformation initiative implementing Microsoft Dynamics ERP system",
      role: "Subject Matter Expert (SME)",
      outcome: "Successfully implemented new ERP system, conducted unit testing for engineering tasks, and optimized software processes with NX OPEN and custom macros, resulting in 20% reduction in engineering time.",
      technologies: ["Microsoft Dynamics", "NX OPEN", "Java", "Azure"],
      status: "Completed"
    },
    {
      id: 2,
      title: "CNC Tooling Optimization System",
      image: "/project-images/cnc-optimization.jpg",
      description: "Developed comprehensive tooling and process optimization solution for CNC operations",
      role: "Lead Engineer",
      outcome: "Achieved 15% improvement in Overall Equipment Effectiveness (OEE) while reducing tooling costs by 15%. Established product control and process control documents for production monitoring.",
      technologies: ["CAM", "G-Code", "CNC Programming", "Process Control"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Automated Design Process with NX Open",
      image: "/project-images/automation.jpg",
      description: "Created automation solutions for injection mold design processes",
      role: "Lead Developer",
      outcome: "Automated design processes using NX Open (Java), significantly reducing manual errors and improving efficiency in end-to-end injection mold development projects from concept to production.",
      technologies: ["NX Open", "Java", "CAD Automation", "Injection Molding"],
      status: "Completed"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Here are some key projects that showcase my expertise in engineering, software development, and process optimization.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project {project.id}</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="detail-item">
                    <strong>My Role:</strong> {project.role}
                  </div>
                  
                  <div className="detail-item">
                    <strong>Outcome:</strong>
                    <p>{project.outcome}</p>
                  </div>
                  
                  <div className="technologies">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-projects">
          <h2>Additional Experience</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <h4>Equipment Integration & Risk Mitigation</h4>
              <p>Supported procurement and integration of new CNC turning center including asset validation. Developed standards for setup/changeover procedures and programming best practices.</p>
            </div>
            <div className="experience-item">
              <h4>Production Monitoring Systems</h4>
              <p>Implemented SQL, UNIX, and CAM-based tools to streamline production monitoring while leading a team of 7 production engineers.</p>
            </div>
            <div className="experience-item">
              <h4>Custom Machine Design</h4>
              <p>Design and Engineering using Inventor for custom machine manufacturers serving steel manufacturing industry, including PLC optimization and electrical control systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;