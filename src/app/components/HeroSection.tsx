import { motion } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:py-20 overflow-hidden bg-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3OTYwNzIzNnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-indigo-50/80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl order-last lg:order-first"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold tracking-wider mb-6 shadow-sm"
            >
              FINAL YEAR UNDERGRADUATE
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-[1.1]"
            >
              Building scalable <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                Cloud, AI & Full-Stack
              </span> solutions.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl leading-relaxed"
            >
              I'm a Software Engineer specializing in the MERN stack, Cloud Architecture (GCP/AWS), and AI Automation. I build intelligent systems that solve real business problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1"
              >
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-indigo-700 bg-white border border-indigo-200 hover:bg-indigo-50 rounded-lg transition-all hover:-translate-y-1 shadow-sm"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative order-first lg:order-last mx-auto w-full max-w-[320px] sm:max-w-md lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-[3rem] rotate-6 opacity-20 blur-2xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] max-w-sm lg:max-w-md mx-auto">
              <ImageWithFallback 
                src="https://firebasestorage.googleapis.com/v0/b/studentmanagmentsystem-e6a3f.firebasestorage.app/o/profile%20photo.png?alt=media&token=9bca6016-64b2-4c55-a010-a74ce320992b"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-6 -left-4 sm:top-10 sm:-left-12 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3 scale-90 sm:scale-100"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-neutral-800 text-sm sm:text-base">Available for Work</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -right-4 sm:bottom-10 sm:-right-8 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl border border-neutral-100 flex flex-col items-center scale-90 sm:scale-100"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600">5+</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-500">Major Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for space */}
      <motion.a 
        href="#about"
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-neutral-400 hover:text-indigo-600 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm font-medium mb-2 uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
