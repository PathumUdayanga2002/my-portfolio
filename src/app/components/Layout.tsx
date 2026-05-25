import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function Layout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white relative" role="document">
      <Navbar />
      <main className="flex-grow" id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating LinkedIn Button */}
      {/* add the animation to the linkedin button */}
      {/* <motion.a
        href="https://www.linkedin.com/in/pathum-udayanga/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#0A66C2] text-white rounded-full shadow-2xl hover:shadow-[#0A66C2]/50 transition-shadow"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} fill="currentColor" />
      </motion.a> */}

      {/* Floating LinkedIn Button with Active Animation */}
<motion.a
  href="https://www.linkedin.com/in/pathum-udayanga/"
  target="_blank"
  rel="noopener noreferrer"
  // Hover animations
  whileHover={{ 
    scale: 1.2,
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }}
  // Tap/click animation
  whileTap={{ 
    scale: 0.95,
    transition: { type: "spring", stiffness: 600, damping: 15 }
  }}
  // Subtle floating animation (always active)
  animate={{ 
    y: [0, -8, 0],
    boxShadow: [
      "0 10px 15px -3px rgba(10, 102, 194, 0.3)",
      "0 20px 25px -5px rgba(10, 102, 194, 0.5)",
      "0 10px 15px -3px rgba(10, 102, 194, 0.3)"
    ]
  }}
  transition={{
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    },
    boxShadow: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }}
  className="fixed bottom-6 right-6 z-50 p-4 bg-[#0A66C2] text-white rounded-full shadow-2xl hover:shadow-[#0A66C2]/50 transition-all duration-300 cursor-pointer group"
  aria-label="LinkedIn"
>
  {/* Optional: Add a subtle pulse ring effect */}
  <div className="absolute inset-0 rounded-full bg-[#0A66C2] opacity-50 animate-ping group-hover:animate-none" />
  
  {/* Icon with rotation on hover */}
  <motion.div
    whileHover={{ rotate: 360 }}
    transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.5 }}
  >
    <Linkedin size={24} fill="currentColor" />
  </motion.div>
</motion.a>
    </div>
  );
}
