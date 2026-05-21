import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Masters of Business Administration (MBA)",
      field: "Project Management",
      institution: "University of Kigali",
      location: "Kigali, Rwanda",
      year: "May 2024 – May 2026",
      description: "Advanced studies in project management, strategic planning, and business leadership."
    },
    {
      degree: "Master in Civil Engineering",
      field: "Structural option",
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      location: "Kenya",
      year: "Mar 2016 – Jul 2018",
      description: "Specialized in structural engineering with Upper class grade."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {edu.field}
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {edu.institution}
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {edu.year}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {edu.location}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
