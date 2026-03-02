import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "./Button"
//import type { Variants } from "framer-motion";
const CTA = () => {
  const navigate = useNavigate()

  return (
    <section className="relative py-32 px-6 overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Glass card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-16 shadow-2xl shadow-black/20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
            Ready to Take the Challenge?
          </h2>

          <p className="mt-6 text-white/60 text-lg">
            Join Pentathlon and compete across five exciting knowledge domains.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <Button onClick={() => navigate("/login")}>
              Register Now
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/learn-more")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
