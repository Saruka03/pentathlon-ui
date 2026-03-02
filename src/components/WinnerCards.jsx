import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

const WinnerCard = ({ position, prize, delay }) => {
  const isFirst = position === "1st"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: isFirst ? 1.05 : 1.02 }}
      className={`relative bg-gradient-to-b from-orange-500/20 to-amber-600/20 backdrop-blur-lg rounded-3xl p-8 text-center border border-orange-400/30 shadow-2xl ${
        isFirst ? "scale-110 z-10 shadow-orange-500/30" : "scale-100"
      }`}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent ${isFirst ? "opacity-100" : "opacity-50"}`} />
      
      {/* Trophy Icon */}
      <div className="relative flex justify-center mb-6">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30`}>
          <Trophy size={40} className="text-white" />
        </div>
      </div>
      
      {/* Position */}
      <div className="relative mb-4">
        <span className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg tracking-wide shadow-lg`}>
          {position} Place
        </span>
      </div>
      
      {/* Prize */}
      <div className="relative">
        <p className="text-orange-200 text-sm mb-2">Prize</p>
        <p className="text-3xl font-bold text-white tracking-wide">{prize}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400/50 rounded-full" />
      <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400/50 rounded-full" />
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400/50 rounded-full" />
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400/50 rounded-full" />
    </motion.div>
  )
}

const WinnerCards = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto px-6">
      {/* 2nd Place */}
      <div className="w-full md:w-72">
        <WinnerCard position="2nd" prize="20,000" delay={0} />
      </div>
      
      {/* 1st Place - Center */}
      <div className="w-full md:w-80">
        <WinnerCard position="1st" prize="35,000" delay={0.2} />
      </div>
      
      {/* 3rd Place */}
      <div className="w-full md:w-72">
        <WinnerCard position="3rd" prize="9,500" delay={0.4} />
      </div>
    </div>
  )
}

export default WinnerCards
