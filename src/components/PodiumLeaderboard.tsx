import { motion } from "framer-motion"
import { Star } from "lucide-react"

// Medal SVG Component with folded fabric ribbon style
interface MedalProps {
  rank: number
  medalColor: string
  ribbonColor: string
}

const Medal: React.FC<MedalProps> = ({ rank, medalColor, ribbonColor }) => {
  return (
    <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ribbon - folded fabric style */}
      <path
        d="M25 60 L20 85 L30 80 L40 90 L50 80 L60 85 L55 60 Z"
        fill={ribbonColor}
      />
      {/* Ribbon left fold detail */}
      <path
        d="M20 85 L30 80 L28 75 L18 82 Z"
        fill={ribbonColor}
        opacity="0.8"
      />
      {/* Ribbon right fold detail */}
      <path
        d="M60 85 L50 80 L52 75 L62 82 Z"
        fill={ribbonColor}
        opacity="0.8"
      />
      {/* Ribbon center shadow */}
      <path
        d="M30 80 L40 90 L50 80 L40 75 Z"
        fill={ribbonColor}
        opacity="0.9"
      />
      
      {/* Medal disc outer ring */}
      <circle
        cx="40"
        cy="35"
        r="32"
        fill={medalColor}
      />
      
      {/* Medal disc inner ring */}
      <circle
        cx="40"
        cy="35"
        r="26"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        opacity="0.15"
      />
      
      {/* Number */}
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="#000"
      >
        {rank}
      </text>
    </svg>
  )
}

const PodiumLeaderboard: React.FC = () => {
  const podiumData = [
    {
      rank: 2,
      name: "2nd Place",
      score: "15,000",
      description: ["Silver Medal", "Trophy", "Certificates"],
      color: "#22d3ee",
      ribbonColor: "#0891b2",
      starColor: "#67e8f9",
      bgGradient: "from-cyan-900 to-blue-900",
      accentColor: "#22d3ee",
      height: "h-64 md:h-72"
    },
    {
      rank: 1,
      name: "1st Place",
      score: "25,000",
      description: ["Gold Medal", "Trophy", "Certificates"],
      color: "#06b6d4",
      ribbonColor: "#0e7490",
      starColor: "#22d3ee",
      bgGradient: "from-cyan-700 to-cyan-900",
      accentColor: "#06b6d4",
      height: "h-80 md:h-96"
    },
    {
      rank: 3,
      name: "3rd Place",
      score: "10,000",
      description: ["Bronze Medal", "Trophy", "Certificates"],
      color: "#67e8f9",
      ribbonColor: "#155e75",
      starColor: "#a5f3fc",
      bgGradient: "from-blue-900 to-cyan-900",
      accentColor: "#67e8f9",
      height: "h-48 md:h-56"
    }
  ]

  return (
    <section className="relative w-full py-20 overflow-hidden bg-cyan-950">
      {/* Dark cyan gradient background with wave effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-blue-950 to-cyan-950" />
      
      {/* Blue wave/light streak effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-r from-cyan-500/20 to-transparent transform rotate-12 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-full bg-gradient-to-l from-cyan-500/10 to-transparent transform -rotate-12" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-cyan-950 to-cyan-950" />
      </div>

      {/* Flowing light streaks */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
        <defs>
          <linearGradient id="blueWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M0,100 Q400,50 800,100 T1600,100" stroke="url(#blueWave)" fill="none" strokeWidth="2" className="animate-[wave_4s_ease-in-out_infinite]" />
        <path d="M0,200 Q400,150 800,200 T1600,200" stroke="url(#blueWave)" fill="none" strokeWidth="1" className="animate-[wave_5s_ease-in-out_infinite_reverse]" />
        <path d="M0,300 Q400,250 800,300 T1600,300" stroke="url(#blueWave)" fill="none" strokeWidth="1.5" className="animate-[wave_6s_ease-in-out_infinite]" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300" style={{ fontFamily: "'Racing Sans One', cursive" }}>
          Prizes<span className="text-cyan-400"> & </span> Awards
        </h2>

        {/* Flexbox horizontal alignment - podium bars aligned at bottom */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-4">
          {podiumData.map((item, index) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative flex flex-col items-center w-full md:w-40"
            >
              {/* Medal with ribbon */}
              <div className="relative z-10 flex items-end justify-center h-28">
                <Medal
                  rank={item.rank}
                  medalColor={item.color}
                  ribbonColor={item.ribbonColor}
                />
              </div>

              {/* Podium base with theme - heights based on rank, content at top */}
              <div
                className={`w-full ${item.height} bg-gradient-to-t ${item.bgGradient} rounded-t-2xl flex flex-col items-center justify-start pt-4 border-t-2 border-cyan-300/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm`}
                style={{
                  boxShadow: `0 0 30px ${item.accentColor}30, inset 0 0 20px rgba(0,0,0,0.3)`
                }}
              >
                {/* Stars based on rank - at top */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: item.rank === 1 ? 3 : item.rank === 2 ? 2 : 1 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={item.rank === 1 ? 20 : 16}
                      fill={item.starColor}
                      style={{ color: item.starColor }}
                      className="opacity-90"
                    />
                  ))}
                </div>

                {/* Rank title */}
                <h3
                  className="text-lg md:text-xl font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.name}
                </h3>

                {/* Prize amount */}
                <p className="text-cyan-300/90 text-sm md:text-base">
                  Rs. {item.score}
                </p>
                {item.description && (
                  <div className="flex flex-col gap-1 mt-2">
                    {Array.isArray(item.description) ? (
                      item.description.map((desc, idx) => (
                        <p key={idx} className="text-cyan-200/70 text-xs md:text-sm">
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-cyan-200/70 text-xs md:text-sm px-2 text-center">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-t-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse_at_center, ${item.accentColor}20 0%, transparent 70%)`
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for wave animation */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20px) translateY(-10px); }
        }
        @keyframes waveReverse {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(10px); }
        }
      `}</style>
    </section>
  )
}

export default PodiumLeaderboard
