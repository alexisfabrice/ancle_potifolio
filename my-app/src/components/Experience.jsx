import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Construction Manager",
      company: "JV REAL &NPD",
      location: "Kigali, Rwanda",
      period: "Sep 2025 - Present",
      description: "Managing and overseeing day-to-day construction site operations for Kigali Wetland Project Gikondo Section. Ensuring quality control, safety compliance, and timely project delivery.",
      achievements: [
        "Managing Kigali Wetland Project Gikondo Section",
        "Overseeing daily construction site operations",
        "Ensuring compliance with safety and quality standards"
      ]
    },
    {
      title: "Founder and Lead Consultant",
      company: "Elite Infrastructure Planning and Management Ltd (EIPM.LTD)",
      location: "Nyarugenge District, Kigali, Rwanda",
      period: "Jan 2023 - Present",
      description: "Leading a multi-disciplined team of Engineers, Architects, and Surveyors. Engaging with clients, managing teams and resources, preparing specifications and contract documents, ensuring compliance with quality, safety, and environmental policies.",
      achievements: [
        "Founded and lead EIPM.LTD engineering consulting firm",
        "Manage multi-disciplinary teams across Rwanda",
        "Deliver civil & structural design, BIM & Digital Twin integration, and construction management services"
      ]
    },
    {
      title: "Senior Project Manager",
      company: "SCHConsult.LTD",
      location: "Kigali, Rwanda",
      period: "Nov 2022 - Present",
      description: "Managed government and private structural projects including modern office partitioning. Planned activities, resources, budgets, managed risks and quality, tracked progress, managed documentation, and ensured customer satisfaction.",
      achievements: [
        "Managed government and private structural projects",
        "Planned activities, resources, and budgets",
        "Ensured customer satisfaction and quality delivery"
      ]
    },
    {
      title: "Project Manager",
      company: "Strawtec Building Solutions Ltd",
      location: "Kigali, Rwanda",
      period: "Apr 2019 - Mar 2022",
      description: "Managed design-build projects using light steel frames and compressed straw panels. Led teams, scheduled activities, tracked costs, ensured quality delivery, monitored progress, conducted profit analysis, and coordinated client communication.",
      achievements: [
        "Managed design-build projects with light steel frames",
        "Led teams and scheduled construction activities",
        "Conducted profit analysis and cost tracking"
      ]
    },
    {
      title: "Quality Control Engineer",
      company: "Strawtec Building Solution",
      location: "Rwanda",
      period: "Oct 2018 - Apr 2019",
      description: "Devised quality assurance procedures, coordinated quality control to ensure compliance with design specifications, carried out quality control on site, factories, and suppliers, prepared daily and monthly quality control reports, and prepared As-built drawings.",
      achievements: [
        "Devised quality assurance procedures for construction sites",
        "Prepared daily and monthly quality control reports",
        "Ensured compliance with design specifications and standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A distinguished career in Rwanda's construction and infrastructure sector
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full md:w-1/2 p-4">
                  <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <Building className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period} | {exp.location}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1 w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
