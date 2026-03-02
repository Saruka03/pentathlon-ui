//import { motion } from "framer-motion"
//import Button from "./Button"
import { motion, type Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier
    },
  },
};
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
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

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl px-8"
      >
        <motion.h1
          variants={item}
          className="text-6xl md:text-7xl font-semibold text-white tracking-tight"
          style={{ fontFamily: "'Racing Sans One', cursive" }}
        >
          PENTATHLON
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 text-xl md:text-2xl text-white/70 italic font-light"
        >
          Think Beyond Boundaries
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
