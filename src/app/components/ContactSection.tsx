import { motion } from "motion/react";
import { Mail, MapPin, ExternalLink, Globe, Sparkles } from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "udayanga.dev.lk@gmail.com",
      link: "mailto:udayanga.dev.lk@gmail.com"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      subValue: "Available Remote Worldwide",
      link: null
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website",
      value: "codinfrinex.com",
      link: "https://www.codinfrinex.com"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-neutral-100 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wider mb-4">
            OPEN FOR OPPORTUNITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl text-neutral-600">
            I am actively seeking an internship or junior role specializing in <strong className="text-indigo-600 font-bold">Cloud Engineering, DevOps, or AI/ML Integrated Software Engineering</strong>. If you are looking for a driven builder ready to scale complex systems, I'd love to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-neutral-200/40 border border-neutral-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{method.title}</h3>
              {method.link ? (
                <a 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-neutral-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
                >
                  {method.value}
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-lg font-medium text-neutral-600">{method.value}</span>
                  {method.subValue && (
                    <span className="text-sm text-neutral-400 mt-1">{method.subValue}</span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto bg-indigo-950 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 relative z-10 backdrop-blur-sm border border-white/20">
             <Sparkles className="w-8 h-8 text-cyan-300" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Actively Seeking a 6-12 Month Internship</h3>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Equipped with hands-on experience in modern cloud architecture (AWS/GCP), containerization, and advanced AI agent workflows. Let's discuss how I can bring immediate value to your engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href="mailto:udayanga.dev.lk@gmail.com"
              className="inline-block px-10 py-4 bg-white text-indigo-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg hover:scale-105 transform duration-300"
            >
              Email Me Directly
            </a>
            <a 
              href="https://www.linkedin.com/in/pathum-udayanga/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-indigo-800 border border-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:scale-105 transform duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
