import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-dark overflow-hidden"
    >
      {/* Background watermark */}
      <img
        src={logo}
        alt="Pentathlon watermark"
        className="absolute right-10 top-1/2 -translate-y-1/2 w-96 opacity-5 pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Pentathlon
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            <span className="text-white font-medium">
              Pentathlon is more than a quiz —
            </span>{" "}
            it is a celebration of curiosity, intelligence, and competitive
            spirit. Designed especially for school students, this event brings
            learning to life through an exciting battle of knowledge.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Participants compete across five diverse domains — Mathematics,
            Science, Information Technology, General Knowledge, and Sports —
            testing not only what they know, but how quickly and confidently
            they can apply it.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed italic">
            Pentathlon inspires teamwork, sharp thinking, and the courage to
            take on challenges beyond the classroom.
          </p>
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl rounded-full"></div>

          <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-10 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white mb-6">
              Highlights
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li>✔ A unique multi-subject quiz experience</li>
              <li>✔ Built specifically for school students</li>
              <li>✔ Encourages teamwork & strategic thinking</li>
              <li>✔ Modern, engaging, and fair competition</li>
              <li>✔ Learn, compete, and have fun</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
