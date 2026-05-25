import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Founder & Lead Developer",
      company: "Codinfrinex Startup",
      period: "2025 - Present",
      location: "Remote",
      description: "Launched an AI solutions and custom web application development startup. Delivered 3+ major projects utilizing Firebase, Next.js, and real-time trackers. Currently developing internal RAG chatbots and AI automation tools for clients."
    },
    {
      role: "Full-Stack Developer (Contract)",
      company: "Royvon Dog",
      period: "2026",
      location: "Remote (Upwork)",
      description: "Built an AI email automation system integrating Gingr CRM with Google Gemini AI via FastAPI to automate and personalizes client communications."
    },
    {
      role: "Backend & Cloud Engineer",
      company: "HashX Collaboration (Hotel Bidding MVP)",
      period: "Oct 2025 - Mar 2026",
      location: "Hybrid",
      description: "Collaborated with a 4-member team to develop a hotel bidding platform connecting hotels and destination management companies. Managed Docker, Oracle Cloud deployment, Nginx, and Spring Boot architecture."
    },
    {
      role: "Technical Team Member",
      company: "Electronics and Computer Science Club, UoK",
      period: "2023 - Present",
      location: "University of Kelaniya",
      description: "Developed and designed the UI/UX for the UoK Robot Battle website (2024) and the Medusa UoK Cybersecurity CTF event. Conducted IoT seminars for school students."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wider mb-4">
            MY TIMELINE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Professional Experience</h2>
          <p className="text-lg text-neutral-600">
            A timeline of my professional roles, freelance work, and major collaborative projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-indigo-100 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 -translate-x-1/2"></div>

            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 100 }}
                className={`relative mb-16 md:mb-24 md:flex ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between w-full group`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-indigo-400 shadow-lg z-10 group-hover:border-indigo-600 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className={`md:w-5/12 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm group-hover:shadow-2xl group-hover:bg-white group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    <div className="flex flex-col gap-1 mb-5">
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                      <div className="text-indigo-600 font-bold flex items-center gap-2 text-lg">
                        <Briefcase className="w-5 h-5" /> {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-neutral-400 mt-3 bg-neutral-100 inline-flex px-4 py-2 rounded-lg w-fit">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-indigo-500" /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-indigo-500" /> {exp.location}</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
