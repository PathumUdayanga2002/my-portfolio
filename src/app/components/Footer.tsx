import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            Pathum<span className="text-indigo-500">Udayanga</span>
          </a>
          <p className="text-neutral-400 max-w-sm mt-2 text-sm">
            Building intelligent cloud architectures and full-stack solutions.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://github.com/PathumUdayanga2002" 
          target="_blank"
          className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pathum-udayanga/" 
          target="_blank"
          className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:udayanga.dev.lk@gmail.com"
          target="_blank"
          className="p-2 rounded-full bg-neutral-800 hover:bg-indigo-600 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Pathum Udayanga. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
