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
      className="py-24 px-6 bg-black"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Pentathlon Categories
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto italic">
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
            whileHover={{ y: -10 }}
            className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center
                       hover:border-primary/50 transition-all duration-300
                       shadow-lg hover:shadow-primary/30"
          >
            <div className="text-5xl mb-6">{item.icon}</div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed italic">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
