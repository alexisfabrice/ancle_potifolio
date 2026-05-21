import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, Building2, Briefcase, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'EIPM.LTD Founder',
      description: 'Leading Elite Infrastructure Planning and Management Ltd, delivering innovative engineering consulting services across Rwanda.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multi-Disciplinary Leadership',
      description: 'Expert in coordinating teams of Engineers, Architects, and Surveyors for complex infrastructure projects.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Project Management',
      description: 'PMP® trained with MBA in Project Management, ensuring timely delivery within budget and quality standards.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'BIM & Digital Twin',
      description: 'Pioneering BIM and Digital Twin integration for smart, sustainable construction in Rwanda.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-primary-600 to-primary-700 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 mx-auto mb-6 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Strategic Civil Engineer and Founder of EIPM.LTD, delivering innovative infrastructure solutions across Rwanda
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full blur-2xl" />
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Professional Biography
              </motion.h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                <motion.p
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  As the Founder and Lead Consultant of Elite Infrastructure Planning and Management Ltd (EIPM.LTD), 
                  I lead a multi-disciplined team of Engineers, Architects, and Surveyors to deliver innovative, 
                  tech-driven, and sustainable construction solutions across Rwanda.
                </motion.p>
                <motion.p
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  With over 10 years of industry experience, I specialize in civil & structural design, 
                  BIM & Digital Twin integration, and project & construction management. My expertise includes 
                  managing government and private structural projects, ensuring compliance with UK standards, 
                  Eurocodes, and Rwanda Building code.
                </motion.p>
                <motion.p
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Currently serving as Construction Manager at JV REAL &NPD for the Kigali Wetland Project 
                  Gikondo Section, while also leading EIPM.LTD and serving as Senior Project Manager at SCHConsult.LTD. 
                  My approach emphasizes quality, safety, sustainability, and client satisfaction.
                </motion.p>
                <motion.p
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Holding an MBA in Project Management from University of Kigali and a Master in Civil Engineering 
                  (Structural option) from JKUAT, I bring a unique combination of technical expertise and strategic 
                  leadership. I'm PMP® trained and certified in International English Language Testing System (CEFR level B2).
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full blur-3xl" />
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center relative z-10"
          >
            Core Competencies
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: <Building2 className="w-8 h-8" />, title: 'Structural Design', desc: 'Expert in designing safe and efficient structures for residential and commercial buildings' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Project Management', desc: 'Comprehensive project planning, scheduling, and execution management' },
              { icon: <Shield className="w-8 h-8" />, title: 'Site Supervision', desc: 'Rigorous on-site supervision ensuring quality control and safety compliance' }
            ].map((competency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 group cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-primary-600 dark:text-primary-400">
                    {competency.icon}
                  </span>
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {competency.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {competency.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
