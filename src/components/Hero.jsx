import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiDownload, FiMail } from "react-icons/fi";

const Hero = () => {

  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "MERN Stack Developer",
      "AI Developer",
      "React.js Developer",
      "Building Modern Web Applications",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 35,
    delaySpeed: 1800,
  });

  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      pt-20
      lg:pt-24
      bg-gradient-to-b
      from-violet-900
      via-[#111827]
      to-black
      overflow-hidden
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        min-h-[90vh]
        flex
        flex-col-reverse
        xl:flex-row
        items-center
        justify-between
        gap-10
        "
      >

        {/* ================= LEFT ================= */}

        <div className="xl:w-[48%] w-full z-20">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-violet-400 text-lg font-semibold"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-extrabold
            text-white
            mt-3
            leading-tight
            "
          >
            Umama Khan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
            mt-6
            text-2xl
            md:text-3xl
            font-semibold
            text-violet-400
            min-h-[90px]
            "
          >
            {text}
            <Cursor cursorStyle="|" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="
            mt-8
            text-lg
            leading-8
            text-gray-300
            max-w-2xl
            "
          >
            I build modern, responsive and scalable web
            applications using the MERN Stack. I enjoy
            transforming ideas into fast, secure and
            user-friendly digital experiences with clean,
            maintainable code.
          </motion.p>

          {/* ================= Buttons ================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-wrap gap-6 mt-10"
          >

            <a
              href="/resume.pdf"
              download
              className="
              flex
              items-center
              gap-2
              px-7
              py-3
              rounded-xl
              bg-violet-600
              hover:bg-violet-700
              duration-300
              text-white
              font-semibold
              shadow-lg
              "
            >
              <FiDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="
              flex
              items-center
              gap-2
              px-7
              py-3
              rounded-xl
              border
              border-violet-500
              hover:bg-violet-600
              duration-300
              text-white
              font-semibold
              "
            >
              <FiMail />
              Contact Me
            </a>

          </motion.div>

                    {/* ================= Stats ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="
            grid
            grid-cols-3
            gap-8
            mt-16
            "
          >
            {/* <div>
              <h2 className="text-4xl font-bold text-violet-400">
                15+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-violet-400">
                MERN
              </h2>

              <p className="text-gray-400 mt-2">
                Stack
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-violet-400">
                100%
              </h2>

              <p className="text-gray-400 mt-2">
                Dedication
              </p>
            </div> */}

          </motion.div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
          }}
          className="
          xl:w-[52%]
          w-full
          h-[760px]
          relative
          flex
          justify-center
          items-start
          -mt-16
          xl:-mt-10
          "
        >

          {/* Purple Glow */}

          <div
            className="
            absolute
            top-16
            w-[520px]
            h-[520px]
            rounded-full
            bg-violet-600/20
            blur-[170px]
            "
          />

          {/* 3D Spline */}

          <div
            className="
            absolute
            inset-0
            flex
            justify-center
            items-start
            "
          >
            <Spline
              scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
              className="
              w-[130%]
              h-[130%]
              scale-110
              xl:translate-x-10
              xl:-translate-y-8
              "
            />
          </div>

        </motion.div>

      </div>

            {/* ================= Bottom Gradient ================= */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-black
        via-black/60
        to-transparent
        pointer-events-none
        "
      />

      {/* ================= Scroll Down ================= */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
        }}
        transition={{
          delay: 2.5,
          duration: 2,
          repeat: Infinity,
        }}
        className="
        hidden
        lg:flex
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex-col
        items-center
        text-gray-300
        hover:text-violet-400
        duration-300
        "
      >

        <span className="text-sm tracking-widest uppercase">
          Scroll
        </span>

        <div
          className="
          mt-3
          w-[2px]
          h-12
          bg-gradient-to-b
          from-violet-400
          to-transparent
          "
        />

      </motion.a>

    </section>

  );
};

export default Hero;