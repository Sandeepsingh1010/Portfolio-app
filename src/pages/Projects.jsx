import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Transformation & ERP Implementation",
      image: "/Project_ERP/power-bi-dashboard.png",
      imageCaption: "Dashboard visualization referenced from Microsoft Learn",
      description: "Led digital transformation initiative implementing Microsoft Dynamics ERP system across engineering workflows and processes",
      role: "Subject Matter Expert (SME)",
      outcome: "Successfully implemented new ERP system, conducted unit testing for engineering tasks, and optimized software processes with NX OPEN and custom macros, resulting in 20% reduction in engineering time.",
      technologies: ["Microsoft Dynamics", "NX OPEN", "Java", "Azure"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "CNC Plotter – CATIA & Arduino",
      image: "/Project_CNC_plotter/Plotter.png",
      imageCaption: "Original project work and design",
      description: "Designed and developed a CNC Plotter integrating CAD modeling, CNC programming, and Arduino automation. Led design, simulation, and manufacturing workflow.",
      role: "Lead Developer & Designer, Arduino Programmer",
      outcome: "Successfully delivered a working CNC plotter prototype with simulation reports, drawings, and control programs.",
      technologies: ["CATIA", "Mastercam", "CNC Programming", "Arduino", "C++", "FEA", "CAD/CAM", "Automation"],
      status: "Completed",
      projectPdf: "/Project_CNC_plotter/CNC_Plotter.pdf"
    },
    {
      id: 3,
      title: "Automated Design Process with NX Open",
      image: "/Project_NX_Open/NX_OPEN2.png",
      imageCaption: "NX Open automation and CAD integration",
      description: "Created automation solutions for injection mold design processes using advanced CAD programming and workflow optimization.",
      role: "Lead Developer, Idea Generation, Testing, and Implementation Support",
      outcome: "Automated design processes using NX Open (Java), significantly reducing manual errors and improving efficiency in end-to-end injection mold development projects from concept to production.",
      technologies: ["Siemens NX", "NX Open", "Java", "CAD Automation", "Injection Molding","Tool Design"],
      status: "In Progress"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Here are some key projects that showcase my expertise in engineering, software development, and process optimization.</p>
        </div>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-item ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
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
                  
                  <div className="detail-item outcome">
                    <strong>Outcome:</strong>
                    <p>{project.outcome}</p>
                  </div>
                  
                  <div className="technologies">
                    
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* PDF Link for projects that have it */}
                  {project.projectPdf && (
                    <div className="project-actions">
                      <a 
                        href={project.projectPdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="pdf-link"
                      >
                        <button className="pdf-button">
                          📄 View Project Report (PDF)
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="project-image">
                {project.image && (project.image.includes('Plotter.png') || project.image.includes('power-bi-dashboard.png') || project.image.includes('NX_OPEN2.png')) ? (
                  <>
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="image-caption">{project.imageCaption}</div>
                  </>
                ) : (
                  <>
                    <div className="image-placeholder">
                      <span>Project {project.id}</span>
                    </div>
                    <div className="image-caption">{project.imageCaption}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;