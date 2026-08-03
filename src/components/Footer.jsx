import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] pt-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          left-1/2
          top-[-350px]
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-violet-700/15
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          bottom-[-180px]
          left-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-fuchsia-700/10
          blur-[150px]
          "
        />

        <div
          className="
          absolute
          bottom-[-200px]
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-violet-500/10
          blur-[160px]
          "
        />

      </div>

      {/* ================= Container ================= */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        "
      >

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span
            className="
            uppercase
            tracking-[6px]
            text-violet-400
            text-sm
            font-semibold
            "
          >
            Let's Connect
          </span>

          <h2
            className="
            mt-8
            text-white
            font-black
            leading-tight

            text-4xl
            sm:text-5xl
            lg:text-7xl
            "
          >
            Let's Create
            <br />
            Something Amazing
            <br />
            Together.
          </h2>

          <p
            className="
            mt-8
            max-w-2xl
            mx-auto
            text-gray-400
            leading-8
            text-lg
            "
          >
            I'm always open to discussing new opportunities,
            freelance projects, collaborations and innovative
            ideas. Let's build a digital experience people
            will remember.
          </p>

                  {/* ================= CTA Button ================= */}

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
          mt-12
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-violet-500/40
          bg-gradient-to-r
          from-violet-600
          to-purple-500
          px-8
          py-4
          font-semibold
          text-white
          shadow-[0_0_35px_rgba(139,92,246,.35)]
          transition-all
          duration-300
          hover:shadow-[0_0_60px_rgba(139,92,246,.6)]
          "
        >
          Start A Project
          <FiArrowUpRight size={20} />
        </motion.a>

      </motion.div>

      {/* ================= Divider ================= */}

      <div className="mt-24 border-t border-white/10" />

      {/* ================= Social ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        py-12
        flex
        justify-center
        items-center
        gap-8
        "
      >
        <a
          href="https://github.com/umikhannn789-crypto"
          target="_blank"
          rel="noreferrer"
          className="
          w-14
          h-14
          rounded-full
          border
          border-white/10
          flex
          items-center
          justify-center
          text-gray-300
          hover:text-white
          hover:bg-violet-600
          hover:border-violet-500
          transition-all
          duration-300
          "
        >
          <FiGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/umama-khan-339734381/"
          target="_blank"
          rel="noreferrer"
          className="
          w-14
          h-14
          rounded-full
          border
          border-white/10
          flex
          items-center
          justify-center
          text-gray-300
          hover:text-white
          hover:bg-violet-600
          hover:border-violet-500
          transition-all
          duration-300
          "
        >
          <FiLinkedin size={22} />
        </a>

        <a
          href="mailto:umikhannn789@gmail.com"
          className="
          w-14
          h-14
          rounded-full
          border
          border-white/10
          flex
          items-center
          justify-center
          text-gray-300
          hover:text-white
          hover:bg-violet-600
          hover:border-violet-500
          transition-all
          duration-300
          "
        >
          <FiMail size={22} />
        </a>
      </motion.div>

            {/* ================= Huge Name ================= */}

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative pt-10 pb-8 overflow-hidden"
      >

        {/* Glow */}

        <div
          className="
          absolute
          left-1/2
          bottom-8
          -translate-x-1/2
          w-[850px]
          h-[260px]
          rounded-full
          bg-violet-600/20
          blur-[140px]
          "
        />

        {/* Huge Text */}

        <h1
          className="
          relative
          z-10
          text-center
          uppercase
          font-black
          leading-none
          tracking-[-0.08em]
          select-none

          text-transparent
          bg-gradient-to-b
          from-white
          via-gray-300
          to-gray-800
          bg-clip-text

          text-[90px]
          sm:text-[150px]
          md:text-[220px]
          lg:text-[320px]
          xl:text-[300px]
          "
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            WebkitTextStroke: "1px rgba(255,255,255,.08)",
            textShadow: "0 20px 60px rgba(139,92,246,.20)",
          }}
        >
          UMAMA
        </h1>

        {/* Bottom */}

        <div
          className="
          relative
          z-20
          -mt-2
          pt-6
          border-t
          border-white/10

          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >
          <p className="text-gray-500 text-sm tracking-wide">
            © 2026 Umama Khan • MERN Stack Developer
          </p>

          <div className="flex items-center gap-8 text-sm">

            <a
              href="#home"
              className="text-gray-400 hover:text-violet-400 duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 hover:text-violet-400 duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-violet-400 duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-violet-400 duration-300"
            >
              Contact
            </a>

          </div>

        </div>

      </motion.div>

    </div>

  </footer>
  );
};

export default Footer;