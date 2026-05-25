import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
      title: "Education",
      description: "Final Year BSc (Hons) Electronics & Computer Science at University of Kelaniya, Sri Lanka. Built a strong foundation in Java, OOP, Software Engineering, and Cyber Security."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
      title: "Entrepreneurship",
      description: "Founder of Codinfrinex, a startup focused on delivering AI solutions, automation, and custom web applications. Successfully delivered multiple client projects."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
      title: "Leadership & Sports",
      description: "Technical Team Member at Electronics & Computer Science Club. Player of the University Hockey Team (2nd Runners-up Inter-University Games 2025)."
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 tracking-tight">
              About My Journey
            </h2>
            <div className="space-y-5 text-lg text-neutral-600">
              <p>
                My journey began when I entered university, where I started self-studying React alongside my formal academic training. I've developed a passion for creating full-scale systems from the ground up, learning everything from frontend nuances to complex backend architectures.
              </p>
              <p>
                As I progressed, I expanded my expertise into the MERN stack, Cloud DevOps, and recently, AI agent development. Building real-world applications while learning has been my primary method of growth.
              </p>
              <p>
                Today, I balance my final year studies with running my startup, <strong className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">Codinfrinex</strong>, delivering production-ready platforms utilizing next-gen AI and robust cloud architectures.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
