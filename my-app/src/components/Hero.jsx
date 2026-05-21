import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, Award, TrendingUp } from 'lucide-react';
import profileImage from '../assets/514106143_24101070816193554_2171009231614255512_n.jpg';

const Hero = () => {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 2 + 1
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-primary-600 to-primary-700 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.18, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-primary-200 dark:border-primary-700"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <span className="text-primary-700 dark:text-primary-300 font-medium">
                Strategic Civil Engineer | Project Manager | Founder of EIPM.LTD
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Jean Claude{' '}
              <motion.span
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
                NDAYAMBAJE
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Founder of Elite Infrastructure Planning and Management Ltd (EIPM.LTD). 
              Expert in civil & structural design, BIM & Digital Twin integration, and sustainable construction. 
              Delivering innovative, tech-driven solutions for Rwanda's infrastructure development.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center sm:justify-start space-x-8 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  15+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  <Award className="w-3 h-3" />
                  Years Experience
                </div>
              </motion.div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Projects Completed
                </div>
              </motion.div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Client Satisfaction
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                
                {/* Image */}
                <motion.img
                  src={profileImage}
                  alt="Jean Claude NDAYAMBAJE"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute bottom-6 left-6 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Available for Projects</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full opacity-30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full opacity-30 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Corner Accents */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary-500 rounded-tl-3xl opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary-500 rounded-br-3xl opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-12 border-2 border-primary-400 rounded-full flex justify-center pt-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm group-hover:border-primary-500 transition-colors">
            <motion.div
              className="w-1.5 h-3 bg-primary-500 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.span
            className="text-xs text-gray-500 dark:text-gray-400 font-medium"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Scroll Down
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
