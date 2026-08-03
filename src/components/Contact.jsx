import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FiMail size={22} />,
    title: "Email us",
    value: "umikhannn789@gmail.com",
  },
  {
    icon: <FiPhone size={22} />,
    title: "Call us",
    value: "+92 3208083931",
  },
  {
    icon: <FiMapPin size={22} />,
    title: "Location",
    value: "Haripur, Pakistan",
  },
];

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cx7ifsc",
        "template_2lw7xcz",
        form.current,
        "zWJ-O_krKiPi_KCow"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  return (
    <section
      id="contact"
      className="
      relative
      bg-[#050505]
      py-32
      overflow-hidden
      "
    >


              {/* Background Text */}

      <h1
        className="
        absolute
        top-12
        left-1/2
        -translate-x-1/2
        text-[130px]
        md:text-[220px]
        font-black
        uppercase
        tracking-widest
        text-white/5
        select-none
        pointer-events-none
        "
      >
        CONTACT
      </h1>

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

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
          "
        >

        </div>

                  {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Small Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              "
            >
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>

              <span className="text-sm text-gray-300">
                Contact
              </span>
            </div>

            {/* Heading */}

            <div>

              <h2
                className="
                text-5xl
                md:text-6xl
                font-bold
                text-white
                "
              >
                Get in Touch
              </h2>

              <p
                className="
                mt-5
                text-gray-400
                leading-8
                max-w-md
                "
              >
                Have a project in mind or looking for a MERN developer?
                I'd love to hear your ideas and help bring them to life.
                Let's create something amazing together.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="space-y-5">

              {contactInfo.map((item, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}

                  transition={{
                    duration: 0.3,
                  }}

                  className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-5
                  cursor-pointer
                  hover:border-violet-500/50
                  hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
                  transition-all
                  duration-300
                  "

                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                      w-12
                      h-12
                      rounded-xl
                      bg-violet-600/20
                      text-violet-400
                      flex
                      items-center
                      justify-center
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h4 className="text-white font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {item.value}
                      </p>

                    </div>

                  </div>

                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    group-hover:bg-violet-600
                    group-hover:text-white
                    transition-all
                    "
                  >
                    →
                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>


                    {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8
            lg:p-10
            shadow-[0_0_40px_rgba(139,92,246,0.15)]
            "
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              {/* Name */}

              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/30
                transition-all
                "
              />

              {/* Email */}

              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                required
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/30
                transition-all
                "
              />

              {/* Message */}

              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                required
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                resize-none
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/30
                transition-all
                "
              ></textarea>

              {/* Submit Button */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-violet-700
                text-white
                font-semibold
                text-lg
                shadow-lg
                hover:shadow-violet-500/40
                transition-all
                duration-300
                "
              >
                Send Message
              </motion.button>

            </form>

          </motion.div>

                  </div>
    

      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        -left-40
        w-[420px]
        h-[420px]
        rounded-full
        bg-violet-600/20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        -bottom-40
        -right-40
        w-[420px]
        h-[420px]
        rounded-full
        bg-fuchsia-600/20
        blur-[180px]
        "
      />

    </section>
  );
};

export default Contact;