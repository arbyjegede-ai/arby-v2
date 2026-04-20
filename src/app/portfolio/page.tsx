"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "GigSecure",
    type: "Web application",
    description:
      "Empowering gig workers to manage uncertainty through clear, actionable risk insights.",
    image: "/assets/images/gigsecure.png",
  },
  {
    title: "Nithub Website",
    type: "Website",
    description:
      "Reimagining Nithub's digital presence to better communicate its innovation ecosystem and drive engagement.",
    image: "/assets/images/nithub.png",
  },
  {
    title: "Spenditure",
    type: "Mobile application",
    description: "Rethinking Personal Expense Awareness.",
    image: "/assets/images/spenditure.png",
  },
  {
    title: "Gleephoria",
    type: "Mobile application",
    description:
      "Designing a dating experience that prioritizes meaningful connections over endless swiping.",
    image: "/assets/images/gleephoria.png",
  },
  {
    title: "Nithub Forms",
    type: "Web application",
    description:
      "Designing a centralized forms system to unify fragmented applications and keep users within the Nithub experience.",
    image: "/assets/images/forms.png",
  },
  {
    title: "Transtura",
    type: "Mobile application",
    description:
      "Redefining the Ride Booking Experience Through System Feedback.",
    image: "/assets/images/transtura.png",
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const isClipped = project.title === "Spenditure" || project.title === "Gleephoria";

  return (
    <div 
      onClick={onClick}
      className="bg-[#484848] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden border border-white/5 hover:border-white/10 transition-all group cursor-pointer"
    >
      <span className="bg-[#ffff00]/10 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-6 font-medium">
        {project.type}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[260px]">
        {project.description}
      </p>

      <div
        className={`mt-auto w-full relative h-48 sm:h-64 transition-all duration-500 
        ${isClipped ? "translate-y-14 scale-110" : "group-hover:scale-105"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false); // Optional: tracks if they got it right

  const closeModal = () => {
    setSelectedProject(null);
    setPassword("");
    setPasswordError(false);
    setIsUnlocked(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "abisola123") {
      setPasswordError(false);
      setIsUnlocked(true);
      // add logic here for what happens when they unlock it
    } else {
      setPasswordError(true);
    }
  };

  return (
    <main className="mx-auto py-8 w-[90%] font-space min-h-screen relative">
      <Header />

      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/80 leading-[1.1] max-w-4xl tracking-tight">
          Product designer with 5+ years of experience crafting experiences,
          guiding teams, and building systems that work.
        </h1>
        <div className="text-gray-500 flex flex-col items-end space-y-3 text-right md:hidden lg:block shrink-0 pt-4">
          <a href="/portfolio" className="cursor-pointer block hover:text-[#FFFFF] transition-colors text-lg">
            Product Design
          </a>
          <a
            href="/working"
            className="block hover:text-[#FFFFF] transition-colors cursor-pointer text-lg"
          >
            Facilitation
          </a>
          <a
            href="/working"
            className="block hover:text-[#FFFFF] transition-colors cursor-pointer text-lg"
          >
            Motion Design
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </section>

      <footer className="pb-10">
        <Socials />
      </footer>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#1a1e20] border border-white/10 rounded-3xl p-8 max-w-4xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selectedProject.title === "GigSecure" ? (
                <div className="flex flex-col items-center text-center mt-4">
                  <h3 className="text-3xl font-bold text-white mb-8">{selectedProject.title}</h3>
                  <div className="w-full h-48 sm:h-64 mb-8">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-lg font-medium mb-2">Coming soon...</p>
                  <p className="text-gray-400 max-w-md leading-relaxed">
                    GigSecure helps gig workers feel safer about getting paid and helps clients trust that work will be delivered.
                  </p>
                </div>
              ) : 
              
              (
                <div className="flex flex-col items-center text-center mt-4">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  
                  {!isUnlocked ? (
                    <form onSubmit={handlePasswordSubmit} className="w-2/3 mt-8">
                      <p className="text-gray-300 mb-4 text-lg">Enter password</p>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (passwordError) setPasswordError(false);
                        }}
                        placeholder="••••••••"
                        className="w-full bg-[#2a2f33] border border-white/20 focus:border-[#FF5F1F] outline-none text-white rounded-lg px-4 py-3 mb-4 transition-colors"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        className="w-full bg-white hover:bg-[#FF5F1F] hover:text-white text-black font-bold text-lg rounded-lg py-3 transition-colors"
                      >
                        Unlock Project
                      </button>
                      
                      {passwordError && (
                        <p className="text-[#FF5F1F] text-sm mt-4 text-left font-medium">
                          Password Incorrect, kindly reach out to the owner of the site.
                        </p>
                      )}
                    </form>
                  ) : (
                    <div className="mt-8 text-[#00ff00]">
                      {/* Success State Placeholder */}
                      <p className="text-xl font-bold mb-2">Access Granted!</p>
                      <p className="text-gray-400">Project details would load here.</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}