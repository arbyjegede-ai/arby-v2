"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";

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
    description: "Empowering gig workers to manage uncertainty through clear, actionable risk insights.",
    image: "/assets/images/gigsecure.png",
  },
  {
    title: "Nithub Website",
    type: "Website",
    description: "Reimagining Nithub's digital presence to better communicate its innovation ecosystem and drive engagement.",
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
    description: "Designing a dating experience that prioritizes meaningful connections over endless swiping.",
    image: "/assets/images/gleephoria.png",
  },
  {
    title: "Nithub Forms",
    type: "Web application",
    description: "Designing a centralized forms system to unify fragmented applications and keep users within the Nithub experience.",
    image: "/assets/images/forms.png",
  },
  {
    title: "Transtura",
    type: "Mobile application",
    description: "Redefining the Ride Booking Experience Through System Feedback.",
    image: "/assets/images/transtura.png",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  // Check if this project should have the "clipped" bottom effect
  const isClipped = project.title === "Spenditure" || project.title === "Gleephoria";

  return (
    <div className="bg-[#575656] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden border border-white/5 hover:border-white/10 transition-all group">
      <span className="bg-[#ffff00]/20 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-6 font-medium">
        {project.type}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[260px]">
        {project.description}
      </p>
      
      {/* Image Container: 
          If isClipped is true, we push it down (translate-y-12) and increase scale slightly 
          to ensure it fills the space while being cut off by the parent's overflow-hidden.
      */}
      <div className={`mt-auto w-full relative h-48 sm:h-64 transition-all duration-500 
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

export default function ResumePage() {
  return (
    <main className="mx-auto py-8 w-[90%] font-space min-h-screen">
      <Header />

      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/80 leading-[1.1] max-w-4xl tracking-tight">
          Product designer with 5+ years of experience crafting experiences, guiding teams, and building systems that work.
        </h1>
        <div className="text-gray-500 space-y-3 text-right hidden lg:block shrink-0 pt-4">
          <p className="hover:text-[#FF5F1F] transition-colors cursor-default text-lg">Product Design</p>
          <p className="hover:text-[#FF5F1F] transition-colors cursor-default text-lg">Facilitation</p>
          <p className="hover:text-[#FF5F1F] transition-colors cursor-default text-lg">Motion Design</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      
      <footer className="pb-10">
        <Socials />
      </footer>
    </main>
  );
}