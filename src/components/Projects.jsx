import React, { useRef, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FiExternalLink, FiX, FiPlay } from "react-icons/fi";

// Images
import ecommerce from "../assets/ecommerce.png";
import restaurant from "../assets/restaurant.png";
import clothing from "../assets/stowave.png";
import dental from "../assets/dental.png";
import cyberion from "../assets/cyberion.png";
import emaanmall from "../assets/emanmall.png"; // ✅ New image import

// =======================================
// Projects Data
// =======================================

const projects = [
  {
    id: 1,
    name: "Dental Clinic Website",
    image: dental,
    description:
      "Modern dental clinic website with appointment booking, doctor profiles, treatment details and responsive UI.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive"],
    live: "https://glistening-crumble-7a155f.netlify.app/#appointment",
  },
  {
    id: 2,
    name: "E-Commerce Store",
    image: ecommerce,
    description:
      "Responsive online shopping website with product listing, shopping cart and beautiful user interface.",
    tech:["React", "Tailwind CSS", "nodejs", "expressjs", "mongodb"],
    live: "https://hukamexpress.com/",
  },
  {
    id: 3,
    name: "Restaurant Website",
    image: restaurant,
    description:
      "Restaurant website featuring online reservation, menu section and responsive modern design.",
    tech: ["React", "Tailwind CSS", "Responsive"],
    live: "https://goldenspoon-rho.vercel.app/",
  },
  {
    id: 4,
    name: "Clothing Website",
    image: clothing,
    description:
      "A modern clothing e-commerce website offering stylish, high-quality fashion for every occasion.",
    tech: ["React", "Tailwind CSS", "nodejs", "expressjs", "mongodb"],
    live: "https://www.stowave.com/",
  },
  {
    id: 5, // ✅ REPLACED with Emaan Mall
    name: "Emaan Mall - Islamic E-Commerce",
    image: emaanmall,
    description:
      "A comprehensive Islamic e-commerce platform offering a wide range of products including abayas, perfumes, accessories, and more with secure online payments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    live: "https://emaanmall.com/",
    status: "Live",
    details: `
Emaan Mall is a complete Islamic e-commerce platform designed to provide a seamless shopping experience for customers looking for quality products.

The platform offers a wide range of products including:
• Abayas & Islamic Clothing
• Perfumes & Attars
• Accessories & Gifts
• Home Decor Items
• Islamic Books & Media

Key Features:
• User Authentication & Profiles
• Product Categories & Filters
• Secure Payment Integration (Stripe)
• Shopping Cart Management
• Order Tracking System
• Admin Dashboard
• Product Reviews & Ratings
• Wishlist Functionality
• Responsive Design
• Fast & Secure Checkout

This platform is built with modern web technologies to ensure speed, security, and a smooth user experience for all customers.

Technologies Used:
React, Node.js, Express, MongoDB, Stripe, JWT Authentication, Tailwind CSS, REST APIs
    `,
  },
  {
    id: 6,
    name: "Cyberion Security Platform",
    image: cyberion,
    description:
      "A complete Cyber Security & Learning Platform currently under active development.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    status: "In Progress",
    details: `
Cyberion is a modern Cyber Security & Learning Platform designed to provide a secure and interactive experience for students, instructors and administrators.

The platform includes role-based authentication with multiple dashboards and powerful management features.

Main Features:

• Secure JWT Authentication
• Admin Dashboard
• Instructor Dashboard
• Student Dashboard
• Courses Management
• Blogs Module
• Events Management
• Certificates
• Assignments & Quizzes
• Progress Tracking
• User Profile Management
• Premium & Free Membership
• Responsive Design
• Secure REST APIs

This project is currently under development and new modules are being added continuously.
    `,
  },
];

// =======================================
// Project Card
// =======================================

function ProjectCard({ project, setSelectedProject }) {
  const handleClick = () => {
    if (project.id === 6) {
      setSelectedProject(project);
    } else {
      window.open(project.live, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group w-[350px] flex-shrink-0"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={1200}
        className="
        w-full
        rounded-3xl
        overflow-hidden
        bg-[#121212]
        border
        border-white/10
        hover:border-violet-500/50
        duration-500
        shadow-2xl
        "
      >
        {/* Image - Fixed Height */}
        <div className="relative h-[230px] w-full overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover duration-700 group-hover:scale-110"
          />

          {/* Status Badge */}
          {project.status && (
            <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 z-10">
              {project.status}
            </span>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300"
            >
              <FiExternalLink size={18} />
              {project.id === 6 ? "View Details" : "View Project"}
            </button>
          </div>
        </div>

        {/* Content - Fixed Height */}
        <div className="p-6 h-[260px] flex flex-col">
          <h3 className="text-white text-2xl font-bold line-clamp-1">
            {project.name}
          </h3>
          <p className="mt-3 text-gray-400 text-sm leading-7 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 4).map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/20 text-violet-300 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

// =======================================
// Main Projects Component
// =======================================

export default function Projects() {
  const sliderRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;

    const animation = gsap.to(slider, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) =>
          gsap.utils.wrap(-totalWidth, 0, parseFloat(x))
        ),
      },
    });

    const pause = () => animation.pause();
    const play = () => animation.resume();

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", play);

    return () => {
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", play);
      animation.kill();
    };
  }, []);

  return (
    <>
      <section
        id="projects"
        className="py-28 overflow-hidden bg-gradient-to-b from-[#070707] via-[#11091b] to-[#070707]"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <p className="uppercase tracking-[6px] text-violet-400 font-semibold">
            Portfolio
          </p>
          <h2 className="mt-4 text-5xl lg:text-6xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Explore some of my recent work including responsive websites,
            business platforms and full stack web applications built using
            React, Tailwind CSS, Node.js and modern web technologies.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-20 overflow-hidden">
          <div ref={sliderRef} className="flex gap-8 w-max px-4">
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Cyberion Modal ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121212] border border-violet-500/20 shadow-[0_0_60px_rgba(139,92,246,.25)]"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-violet-600 duration-300 flex items-center justify-center z-10"
            >
              <FiX size={22} className="text-white" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-[320px] object-cover"
            />

            <div className="p-10">
              <span className="inline-block px-5 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-semibold">
                🚧 Currently In Progress
              </span>

              <h2 className="mt-6 text-5xl font-bold text-white">
                Cyberion Security Platform
              </h2>

              <p className="mt-8 text-gray-300 leading-9 text-lg whitespace-pre-line">
                {selectedProject.details}
              </p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Platform Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    "Admin Dashboard",
                    "Instructor Dashboard",
                    "Student Dashboard",
                    "Role Based Authentication",
                    "JWT Security",
                    "Courses Management",
                    "Events Module",
                    "Blogs System",
                    "Certificates",
                    "Assignments & Quizzes",
                    "Premium Membership",
                    "Responsive Design",
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 duration-300"
                    >
                      <p className="text-white">✅ {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}