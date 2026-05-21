import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emmanuel Mugisha",
      position: "Property Developer",
      company: "Kigali Estates Ltd",
      text: "Exceptional work on our luxury villa project. The attention to detail and project management skills were outstanding. Delivered on time and within budget.",
      rating: 5
    },
    {
      name: "Marie Claire Uwimana",
      position: "Director",
      company: "Rwanda Housing Authority",
      text: "A true professional with deep expertise in civil engineering. His supervision of our apartment complex project ensured the highest quality standards.",
      rating: 5
    },
    {
      name: "Patrick Niyonzima",
      position: "CEO",
      company: "Infrastructure Rwanda",
      text: "Outstanding leadership and technical expertise. The road infrastructure project was completed ahead of schedule with excellent quality.",
      rating: 5
    },
    {
      name: "Claudine Mukandanga",
      position: "Homeowner",
      company: "Private Client",
      text: "Built our dream home with exceptional craftsmanship. Professional, reliable, and delivered beyond our expectations. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="text-primary-600 dark:text-primary-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div className="flex ml-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">
                  {testimonial.position}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
