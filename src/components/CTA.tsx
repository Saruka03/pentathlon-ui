import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Button from "./Button"

const CTA = () => {
  const navigate = useNavigate()

  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Take the Challenge?
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Join Pentathlon and compete across five exciting knowledge domains.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <Button onClick={() => navigate("/login")}>
            Register Now
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
