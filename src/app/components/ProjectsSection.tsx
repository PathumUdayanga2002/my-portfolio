import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Tabs from "@radix-ui/react-tabs";
import { ExternalLink, Github, Folder, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { image } from "motion/react-client";

export function ProjectsSection() {
  const projects = [
    {
      id: "ai-hotel",
      title: "AI-Powered Hotel Booking Agent",
      categories: ["ai", "cloud", "fullstack"],
      tech: ["Node.js", "Next.js", "MongoDB", "FastAPI", "LangGraph", "Groq", "Qdrant", "Terraform", "AWS EKS"],
      description: "A core hotel booking system with a FastAPI LangGraph agent. Automates bookings, rescheduling, and cancellations based on human-like chat. Features RAG for FAQs, self-hosted Qdrant vector DB, and automated document chunking.",
      year: "2026",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV0d29ya3xlbnwxfHx8fDE3Nzk1MjAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      githubUrl: "https://github.com/PathumUdayanga2002/booking-agent",
      linkedinUrl: "www.linkedin.com/in/pathum-udayanga",
  
    },
    {
      id: "dental-agent",
      title: "Dental Clinic AI Booking Agent",
      categories: ["ai", "cloud"],
      tech: ["n8n", "Next.js", "Telegram API", "Pinecone Vector DB"],
      description: "Developed an automated agent for dental clinics. Captures patient details via chat, manages bookings, and communicates with doctors via Telegram. Features a RAG system for 24/7 question answering.",
      year: "2026",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/Screenshot%202026-05-23%20155453.png?alt=media&token=7b0e34c9-df70-4081-bff1-99bdaceb6535",
      
      linkedinUrl: "https://www.linkedin.com/posts/pathum-udayanga_ai-agent-agenticai-ugcPost-7464554964007428096-shWM/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkVPoUBEy0TwviTsqZJLL3smyrQVVB9Ph8",
    
    },
    {
      id: "salon-booking",
      title: "Beauty Salon Booking System",
      categories: ["fullstack", "cloud"],
      tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Cloud Deployment"],
      description: "Industrial-level booking system with service & product management, appointment calendars, admin controls, messaging, payment integration, and reviews. Deployed using robust cloud architecture.",
      year: "2025",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/salon-web.png?alt=media&token=0d3b79dc-fd7f-46d9-ba7b-3e9a616dec3d",
      
      linkedinUrl: "https://www.linkedin.com/posts/pathum-udayanga_mern-reactjs-nodejs-activity-7350493274261905408-AO86?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkVPoUBEy0TwviTsqZJLL3smyrQVVB9Ph8"
    
    },
    {
      id: "presentation-tool",
      title: "Movo Presentation Guidance System",
      categories: ["fullstack", "cloud", "ai"],
      tech: ["React Vite", "Node.js", "Socket.IO", "GCP", "Vertex AI", "ESP32", "Google Calendar"],
      description: "University IoT project. A role-based guidance tool with real-time countdowns, separate dashboards, and pose tracking visual analysis. Includes a Google Vertex AI chatbot. 4 member team project with a successful demo at the university research symposium.",
      year: "2024",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/movo.png?alt=media&token=d3053864-aa9c-4f5e-990c-fa8ea341a386",
      githubUrl: "#",
      linkedinUrl: "#",
      liveUrl: "#"
    },
    {
      id: "hotel-bidding",
      title: "Hotel Bidding Platform",
      categories: ["cloud", "fullstack"],
      tech: ["Spring Boot", "React Vite", "MongoDB", "Docker", "Oracle Cloud", "Nginx"],
      description: "Connecting hotels and destination management companies. Developed as a 4-member team in collaboration with HashX. Currently validating MVP.",
      year: "2025 - 2026",
      image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3Nzk0NDMzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      githubUrl: "#",
      linkedinUrl: "#",
      liveUrl: "https://rezpitch.hashx.live"
    },
    {
      id: "food-delivery",
      title: "Food Delivery Mobile App",
      categories: ["fullstack", "cloud"],
      tech: ["React Native", "Expo", "Firebase Backend as a Service"],
      description: "A comprehensive mobile application for food delivery, utilizing Firebase as a fully managed cloud backend service.",
      year: "2025",
      githubUrl: "#",
      linkedinUrl: "#",
      liveUrl: "#"
    },
    {
      id: "email-automation",
      title: "Upwork AI Email Automation",
      categories: ["ai", "cloud"],
      tech: ["Gingr CRM", "FastAPI", "Google Gemini AI", "Google Cloud Platform"],
      description: "AI-driven email automation system built for a client (Royvon Dog) integrating CRM data with Gemini for automated client communications.",
      year: "2026",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/royvon.png?alt=media&token=18e72dce-87c8-4c00-8049-7f12de663447",
    },
    {
      id: "air-filters",
      title: "Air Filters Solution Company",
      categories: ["fullstack", "cloud"],
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      description: "A next-generation air filters solution website to showcase their company product and services and get inquiries.",
      year: "2025",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/axel.png?alt=media&token=c9bb9baa-bd48-45cd-9968-853ed185a5e2",
      
      
      liveUrl: "https://www.axelsl.com/"
    },
    {
      id: "fernway-tours",
      title: "Ceylon Fernway Tours Website",
      categories: ["fullstack", "cloud"],
      tech: ["React Vite", "Tailwind CSS", "Firebase"],
      description: "Modern direct contact foreign tourists web system equipped with a comprehensive admin panel.",
      year: "2025",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/tourism.png?alt=media&token=98fc3c70-0493-4365-82ba-959743400a36",
      
      linkedinUrl: "https://www.linkedin.com/posts/pathum-udayanga_webdevelopment-reactjs-vite-activity-7434779683004563457-hsrF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkVPoUBEy0TwviTsqZJLL3smyrQVVB9Ph8",
      liveUrl: "https://www.ceylonfernwaytours.com/"
    },
    {
      id: "business-analysis",
      title: "Business Analysis System",
      categories: ["fullstack", "cloud"],
      tech: ["React Vite", "Firebase"],
      description: "Track COD orders, analyze loss and profit, create orders, manage salaries, and track income and expenses.",
      year: "2025",
      image: "https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/bw.png?alt=media&token=52690df2-82c3-47c0-8390-9b49e3af9f00",
      
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "cloud", label: "Cloud & DevOps (Featured)" },
    { value: "ai", label: "AI & Automation" },
    { value: "fullstack", label: "Full-Stack (MERN)" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeTab === "all" || p.categories.includes(activeTab)
  );

  return (
    <section id="projects" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Featured Work</h2>
            <p className="text-lg text-neutral-600">
              A selection of my recent projects. <strong className="text-indigo-600">Every project leverages Cloud/DevOps infrastructure</strong> to ensure scalability, alongside deep integrations in AI and robust Full-Stack architecture.
            </p>
          </motion.div>
        </div>

        <Tabs.Root defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex flex-wrap gap-2 mb-12 border-b border-neutral-200 pb-px">
            {categories.map((cat) => (
              <Tabs.Trigger
                key={cat.value}
                value={cat.value}
                className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-all border-b-2 relative ${
                  activeTab === cat.value
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                    : "border-transparent text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                } outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
              >
                {cat.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Tabs.Content value={activeTab} className="outline-none">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {project.image ? (
                      <div className="h-52 overflow-hidden relative bg-neutral-100 shrink-0">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-neutral-800">
                          {project.year}
                        </div>
                      </div>
                    ) : (
                      <div className="h-52 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center relative overflow-hidden group-hover:bg-indigo-100 transition-colors duration-300 shrink-0">
                        <Folder className="w-16 h-16 text-indigo-200 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-500" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-neutral-800">
                          {project.year}
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex-grow flex flex-col relative bg-white z-10">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                      <p className="text-neutral-600 text-sm mb-6 flex-grow line-clamp-4">
                        {project.description}
                      </p>
                      
                      <div className="space-y-4 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 5).map((t, i) => (
                            <span key={i} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-indigo-50/80 text-indigo-700 rounded-md">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 5 && (
                            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md">
                              +{project.tech.length - 5}
                            </span>
                          )}
                        </div>
                        
                        <div className="pt-4 border-t border-neutral-100 flex flex-wrap justify-start gap-4 items-center">
                          <a href={project.githubUrl || "#"} className="text-sm font-semibold text-neutral-600 flex items-center hover:text-indigo-600 transition-colors">
                            <Github className="w-4 h-4 mr-1.5" /> Source
                          </a>
                          <a href={project.linkedinUrl || "#"} className="text-sm font-semibold text-neutral-600 flex items-center hover:text-[#0A66C2] transition-colors">
                            <Linkedin className="w-4 h-4 mr-1.5" /> Post
                          </a>
                          <a href={project.liveUrl || "#"} className="text-sm font-semibold text-indigo-600 flex items-center hover:text-indigo-800 transition-colors ml-auto">
                            <ExternalLink className="w-4 h-4 mr-1.5" /> Live
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
