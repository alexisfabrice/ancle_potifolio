import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true);
    }
  }, [isInView, counted]);

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, value: 50, label: 'Projects Completed', suffix: '+' },
    { icon: <Users className="w-8 h-8" />, value: 15, label: 'Years Experience', suffix: '+' },
    { icon: <Award className="w-8 h-8" />, value: 50, label: 'Team Members Managed', suffix: '+' },
    { icon: <TrendingUp className="w-8 h-8" />, value: 100, label: 'Client Satisfaction', suffix: '%' }
  ];

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (counted) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const incrementTime = duration / end;
        
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
      }
    }, [counted, value]);

    return (
      <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Building Rwanda's future with excellence and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-primary-100 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
