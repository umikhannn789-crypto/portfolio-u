import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

import emailjs from "@emailjs/browser";

const Header = () => {
  // ===========================
  // Mobile Menu
  // ===========================
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ===========================
  // Contact Popup
  // ===========================
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);

  const closeContactForm = () => setContactFormOpen(false);

  // ===========================
  // Sticky Navbar
  // ===========================
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===========================
  // EmailJS
  // ===========================

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        closeContactForm();
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    // {
    //   name: "Skills",
    //   href: "#skills",
    // },
    {
      name: "Projects",
      href: "#projects",
    },
    // {
    //   name: "Experience",
    //   href: "#experience",
    // },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 backdrop-blur-lg bg-[#0f172a]/90 shadow-lg"
          : "absolute"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex justify-between items-center">

        {/* ================= Logo ================= */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="flex items-center gap-3"
        >
          <div
            className="w-11 h-11 rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            flex
            justify-center
            items-center
            text-white
            font-bold
            text-lg"
          >
            UK
          </div>

          <div>
            <h2 className="text-white font-bold text-xl">
              Umama Khan
            </h2>

            <p className="text-gray-400 text-xs">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* ================= Desktop Navbar ================= */}

        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item, index) => (

            <motion.a

              key={item.name}

              href={item.href}

              initial={{
                opacity: 0,
                y: -20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.15,
              }}

              className="text-gray-200 hover:text-violet-400 duration-300 font-medium"

            >

              {item.name}

            </motion.a>

          ))}

        </nav>

                {/* ================= Right Side ================= */}

        <div className="hidden lg:flex items-center gap-5">

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/umikhannn789-crypto"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-violet-400 duration-300"
          >
            <FiGithub size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/umama-khan-339734381/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-violet-400 duration-300"
          >
            <FiLinkedin size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="umikhannn789@email.com"
            className="text-gray-300 hover:text-violet-400 duration-300"
          >
            <FiMail size={22} />
          </motion.a>

          <motion.button
            onClick={openContactForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="
            ml-2
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            text-white
            font-semibold
            shadow-lg
            hover:shadow-violet-600/40
            transition-all
            "
          >
            Let's Talk
          </motion.button>

        </div>

        {/* ================= Mobile Menu Button ================= */}

        <div className="lg:hidden">

          <button
            onClick={toggleMenu}
            className="text-white"
          >
            {isOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* ================= Mobile Menu ================= */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{
              opacity:0,
              height:0
            }}

            animate={{
              opacity:1,
              height:"auto"
            }}

            exit={{
              opacity:0,
              height:0
            }}

            transition={{
              duration:.4
            }}

            className="
            lg:hidden
            bg-[#0f172a]
            px-8
            py-6
            shadow-xl
            "

          >

            <nav className="flex flex-col gap-6">

              {navItems.map((item)=>(

                <a

                  key={item.name}

                  href={item.href}

                  onClick={toggleMenu}

                  className="
                  text-gray-200
                  hover:text-violet-400
                  duration-300
                  "

                >

                  {item.name}

                </a>

              ))}

            </nav>

            <button

              onClick={()=>{
                toggleMenu();
                openContactForm();
              }}

              className="
              mt-8
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              text-white
              font-semibold
              "

            >

              Contact Me

            </button>

          </motion.div>

        )}

      </AnimatePresence>

            {/* ================= Contact Popup ================= */}

      <AnimatePresence>

        {contactFormOpen && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-5
            z-[999]
            "

          >

            <motion.div

              initial={{
                scale: .8,
                opacity:0
              }}

              animate={{
                scale:1,
                opacity:1
              }}

              exit={{
                scale:.8,
                opacity:0
              }}

              transition={{
                duration:.35
              }}

              className="
              bg-[#111827]
              rounded-2xl
              p-8
              w-full
              max-w-lg
              shadow-2xl
              "

            >

              {/* Heading */}

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-white">

                  Let's Work Together

                </h2>

                <button
                  onClick={closeContactForm}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX size={24}/>
                </button>

              </div>

              {/* Form */}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >

                <input

                  type="text"

                  name="from_name"

                  placeholder="Your Name"

                  required

                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  "

                />

                <input

                  type="email"

                  name="reply_to"

                  placeholder="Your Email"

                  required

                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  "

                />

                <textarea

                  rows="5"

                  name="message"

                  placeholder="Write your message..."

                  required

                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  resize-none
                  "

                />

                <button

                  type="submit"

                  className="
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  text-white
                  font-semibold
                  hover:opacity-90
                  duration-300
                  "

                >

                  Send Message

                </button>

              </form>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

};

export default Header;