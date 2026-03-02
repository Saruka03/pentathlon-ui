import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND - LearnMore style */}
      <div className="absolute inset-0 bg-[#050816]" />
      
      {/* Ambient gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] bg-purple-500/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[20%] w-[30%] h-[30%] bg-cyan-400/15 rounded-full blur-[120px]" />
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />

      {/* Watermark */}
      <img
        src={logo}
        alt="Pentathlon watermark"
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] opacity-[0.03] pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
            About Pentathlon
          </h2>

          <p className="mt-8 text-white/70 leading-relaxed">
            <span className="text-white font-medium">
              Pentathlon is more than a quiz —
            </span>{" "}
            it is a celebration of curiosity, intelligence, and competitive
            spirit. Designed especially for school students, this event brings
            learning to life through an exciting battle of knowledge.
          </p>

          <p className="mt-6 text-white/60 leading-relaxed">
            Participants compete across five diverse domains — Mathematics,
            Science, Information Technology, General Knowledge, and Sports —
            testing not only what they know, but how quickly and confidently
            they can apply it.
          </p>

          <p className="mt-6 text-white/60 leading-relaxed italic">
            Pentathlon inspires teamwork, sharp thinking, and the courage to
            take on challenges beyond the classroom.
          </p>
        </motion.div>

        {/* Highlight Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 blur-3xl rounded-3xl" />

          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 shadow-2xl shadow-black/20 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-8" style={{ fontFamily: "'Racing Sans One', cursive" }}>
              Highlights
            </h3>

            <ul className="space-y-5 text-white/70 text-base">
              <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                A unique multi-subject quiz experience
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                Built specifically for school students
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                Encourages teamwork & strategic thinking
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                Modern, engaging, and fair competition
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                Learn, compete, and have fun
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
