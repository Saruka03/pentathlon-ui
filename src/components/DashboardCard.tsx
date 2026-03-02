import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"

interface Props {
  title: string
  onClick: () => void
  icon?: LucideIcon
}

const DashboardCard = ({ title, onClick, icon: Icon }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="
        cursor-pointer
        relative
        h-40
        rounded-2xl
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        flex flex-col items-center justify-center
        text-white text-lg font-medium
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:shadow-cyan-500/20
        group
        overflow-hidden
      "
    >
      {/* Liquid glass gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated liquid effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Glow ring on hover */}
      <div className="
        absolute inset-0 rounded-2xl
        border border-cyan-500/30
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      " />

      {/* Glass overlay on hover */}
      <div className="
        absolute inset-0
        bg-white/10
        backdrop-blur-sm
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
      " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon container */}
        {Icon && (
          <div className="
            flex items-center justify-center
            w-12 h-12
            rounded-xl
            bg-white/10
            mb-3
            group-hover:bg-white/20
            transition-colors duration-300
          ">
            <Icon size={24} className="text-cyan-200" />
          </div>
        )}
        
        <span className="text-white/90 group-hover:text-white transition-all duration-300">
          {title}
        </span>
      </div>
    </motion.div>
  )
}

export default DashboardCard
