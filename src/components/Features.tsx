import { motion } from "framer-motion"

const features = [
  {
    title: "Mathematics",
    desc: "Test your logical thinking and problem-solving speed.",
    icon: "📐",
  },
  {
    title: "Science",
    desc: "Explore physics, chemistry, and biology challenges.",
    icon: "🔬",
  },
  {
    title: "Information Technology",
    desc: "Technology, computers, and digital intelligence.",
    icon: "💻",
  },
  {
    title: "General Knowledge",
    desc: "Awareness beyond textbooks and classrooms.",
    icon: "🌍",
  },
  {
    title: "Sports",
    desc: "Sports history, rules, and legendary moments.",
    icon: "⚽",
  },
]

const Features = () => {
  return (
    <section
      id="categories"
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

      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
          Pentathlon Categories
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto italic text-lg">
          "Five disciplines. One ultimate challenge. Compete across diverse
          domains and prove your excellence"
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center
                       hover:border-white/20 hover:bg-white/10 transition-all duration-300 ease-out
                       shadow-2xl shadow-black/20 group"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-300" />

            <div className="relative text-6xl mb-6">{item.icon}</div>

            <h3 className="relative text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>
              {item.title}
            </h3>

            <p className="relative text-white/60 text-sm leading-relaxed italic">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
