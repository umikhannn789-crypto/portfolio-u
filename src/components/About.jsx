import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
      relative
      overflow-hidden
      py-28
      bg-gradient-to-b
      from-[#050505]
      via-[#0B0715]
      to-[#050505]
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[750px]
          h-[750px]
          rounded-full
          bg-violet-600/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          bottom-[-180px]
          right-[-120px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-fuchsia-600/10
          blur-[150px]
          "
        />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
            About Me
          </span>

          {/* <h2
            className="
            mt-6
            text-white
            text-5xl
            md:text-6xl
            font-bold
            "
          >
            I'm <span className="text-violet-400">Umama Khan</span>
          </h2> */}

          <h3
            className="
            mt-5
            text-gray-300
            text-xl
            md:text-2xl
            font-medium
            "
          >
            Full Stack MERN Developer
          </h3>

        </motion.div>

        {/* About Content */}

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          mt-14
          max-w-4xl
          mx-auto
          text-center
          "
        >

          <p
            className="
            text-gray-400
            text-lg
            leading-9
            "
          >
            I'm a passionate Full Stack MERN Developer with a strong
            interest in creating modern, responsive and user-friendly
            web applications. I enjoy turning ideas into real digital
            products using clean code, scalable architecture and
            beautiful user interfaces.
          </p>

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            leading-9
            "
          >
            I continuously improve my skills by learning modern
            technologies and best development practices. My goal is
            to build high-quality web experiences that combine
            performance, creativity and functionality.
          </p>

        </motion.div>

        {/* Skills Heading */}

        <div className="mt-24 text-center">

          <h2
            className="
            text-4xl
            font-bold
            text-white
            "
          >
            Skills
          </h2>

          <div
            className="
            w-24
            h-[3px]
            bg-violet-500
            mx-auto
            mt-5
            rounded-full
            "
          />

        </div>

        {/* Skills Grid */}

        <div
          className="
          mt-16
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
          "
        >


                    {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",

            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",

            "Bootstrap",
            "Git",
            "GitHub",
            "REST API",

            "JWT Auth",
            "Responsive UI",
            "GSAP",
            "Framer Motion",
          ].map((skill, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              py-5
              px-4
              cursor-pointer
              duration-300
              hover:border-violet-500/40
              hover:bg-violet-500/10
              "
            >

              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                duration-500
                bg-gradient-to-r
                from-violet-600/10
                via-fuchsia-500/10
                to-violet-600/10
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                  text-center
                  text-white
                  font-semibold
                  text-base
                  duration-300
                  group-hover:text-violet-300
                  "
                >
                  {skill}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Line */}

        <div
          className="
          mt-24
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-500/40
          to-transparent
          "
        />

                {/* ================= Bottom Section ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          mt-20
          text-center
          "
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
            Always Learning
          </span>

          <h2
            className="
            mt-5
            text-white
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Building Better Every Day
          </h2>

          <p
            className="
            mt-8
            max-w-3xl
            mx-auto
            text-gray-400
            leading-8
            text-lg
            "
          >
            I enjoy learning new technologies, improving my coding
            skills and building modern web applications that provide
            excellent user experiences. Every project is an opportunity
            to grow as a developer and create something meaningful.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default About;