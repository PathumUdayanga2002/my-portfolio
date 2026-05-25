import { motion } from "motion/react";
import { Code2, Database, Cloud, Bot, Server, Shield } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      skills: ["React & React Native", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS/JS"]
    },
    {
      title: "Backend & Full-Stack",
      icon: <Server className="w-6 h-6 text-cyan-600" />,
      skills: ["Node.js & Express", "FastAPI", "Spring Boot", "MERN Stack", "Java"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      skills: ["MongoDB", "Firebase / Firestore", "Pinecone (Vector)", "Qdrant (Vector)", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      skills: ["Docker & Kubernetes", "Google Cloud Platform", "AWS (EKS)", "Terraform", "GitHub Actions (CI/CD)"]
    },
    {
      title: "AI & Automation",
      icon: <Bot className="w-6 h-6 text-indigo-600" />,
      skills: ["LangGraph", "LangChain", "n8n Automation", "RAG Architecture", "Google Gemini & Vertex AI", "Groq API"]
    },
    {
      title: "Core Concepts",
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      skills: ["Object-Oriented Programming", "Software Engineering", "Cyber Security Fundamentals", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold tracking-wider mb-4 border border-cyan-100">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Technical Arsenal</h2>
          <p className="text-lg text-neutral-600">
            A comprehensive toolset spanning the entire stack, from responsive frontends to scalable cloud infrastructure and intelligent AI agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 80 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-[0_8px_30px_rgb(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-indigo-50 rounded-2xl shadow-inner group-hover:scale-110 group-hover:bg-indigo-600 [&>svg]:group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-neutral-50 border border-neutral-100 text-neutral-700 text-sm font-semibold rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
