import { motion } from "framer-motion"
import logo from "../assets/logo.png"
import Button from "./Button"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl px-6"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-white"
        >
          PENTATHLON
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-300 italic"
        >
          Think Beyond Boundaries
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
