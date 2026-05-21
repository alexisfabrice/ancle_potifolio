import { motion } from 'framer-motion';
import { Building2, Home, Road, Wrench, X, Calendar, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Kigali Wetland Project",
      category: "Infrastructure",
      location: "Gikondo Section, Kigali, Rwanda",
      description: "Managing day-to-day construction site operations for this major wetland development project. Ensuring quality control, safety compliance, and timely delivery.",
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      duration: "Ongoing",
      teamSize: "25+ professionals",
      client: "JV REAL & NPD",
      keyAchievements: [
        "Successfully managing site operations and quality control",
        "Implementing safety protocols with zero major incidents",
        "Coordinating multiple subcontractors and stakeholders",
        "Ensuring compliance with environmental regulations"
      ],
      technologies: ["BIM", "Digital Twin", "Project Management Software"]
    },
    {
      title: "EIPM.LTD Consulting Services",
      category: "Engineering Consulting",
      location: "Rwanda",
      description: "Delivering civil & structural design, project & construction management, BIM & Digital Twin integration, and green building advisory services across Rwanda.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      duration: "Since 2020",
      teamSize: "15+ specialists",
      client: "Various Private & Government Clients",
      keyAchievements: [
        "Established EIPM.LTD as leading engineering consultancy",
        "Delivered 50+ successful projects across Rwanda",
        "Pioneered BIM and Digital Twin adoption in Rwanda",
        "Achieved 100% client satisfaction rate"
      ],
      technologies: ["BIM", "Digital Twin", "Structural Analysis", "Green Building Standards"]
    },
    {
      title: "Government Structural Projects",
      category: "Government",
      location: "Kigali, Rwanda",
      description: "Managed government structural projects including modern office partitioning. Planned activities, resources, budgets, and ensured quality delivery.",
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      duration: "2019-2021",
      teamSize: "12+ engineers",
      client: "Government of Rwanda",
      keyAchievements: [
        "Completed multiple government structural projects on time",
        "Managed budgets exceeding RWF 500M",
        "Ensured compliance with Rwanda Building Code",
        "Coordinated with multiple government agencies"
      ],
      technologies: ["Structural Design", "Project Management", "Quality Control"]
    },
    {
      title: "Light Steel Frame Buildings",
      category: "Residential",
      location: "Kigali, Rwanda",
      description: "Managed design-build projects using light steel frames and compressed straw panels. Led teams, scheduled activities, and ensured quality delivery.",
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      duration: "2018-2020",
      teamSize: "8+ specialists",
      client: "Private Developers",
      keyAchievements: [
        "Pioneered light steel frame construction in Rwanda",
        "Reduced construction time by 30%",
        "Achieved sustainable building certifications",
        "Trained local teams in modern construction techniques"
      ],
      technologies: ["Light Steel Framing", "Compressed Straw Panels", "Sustainable Design"]
    },
    {
      title: "Construction Permit Acquisition",
      category: "Consulting",
      location: "Kigali City, Rwanda",
      description: "Facilitating construction and occupation permit processes within Kigali and across Rwanda for various development projects.",
      icon: <Road className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
      duration: "Ongoing Service",
      teamSize: "5+ specialists",
      client: "Property Developers & Investors",
      keyAchievements: [
        "Successfully acquired 100+ construction permits",
        "Reduced permit processing time by 40%",
        "Expert knowledge of Kigali City regulations",
        "High success rate in permit approvals"
      ],
      technologies: ["Regulatory Compliance", "Document Management", "Stakeholder Coordination"]
    },
    {
      title: "Building Audit & Compliance",
      category: "Consulting",
      location: "Rwanda",
      description: "Assessing safety, stability, and conformity of existing buildings to ensure long-term resilience and compliance with building codes.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      duration: "Ongoing Service",
      teamSize: "6+ inspectors",
      client: "Property Owners & Financial Institutions",
      keyAchievements: [
        "Conducted 200+ building audits",
        "Identified critical safety issues in multiple buildings",
        "Provided remediation recommendations",
        "Ensured compliance with Rwanda Building Code"
      ],
      technologies: ["Structural Assessment", "Safety Inspection", "Compliance Reporting"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects <span className="text-primary-600 dark:text-primary-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing excellence in construction across Rwanda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-primary-600 text-white text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {selectedProject.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold text-gray-900 dark:text-white">Duration</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold text-gray-900 dark:text-white">Team Size</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.teamSize}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold text-gray-900 dark:text-white">Client</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.client}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
