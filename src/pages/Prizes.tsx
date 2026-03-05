import { Link } from "react-router-dom"
import PodiumLeaderboard from "../components/PodiumLeaderboard"
//import Footer from "../components/Footer"

const Prizes = () => {
  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] bg-purple-500/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[20%] w-[30%] h-[30%] bg-cyan-400/15 rounded-full blur-[120px]" />
      </div>

      {/* Glass overlay */}
      <div className="fixed inset-0 bg-white/5 backdrop-blur-2xl" />

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <ul className="flex justify-center gap-8">
            <li>
              <Link to="/about" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/rules" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Rules</Link>
            </li>
            <li>
              <Link to="/prizes" className="text-cyan-400 font-semibold">Prizes</Link>
            </li>
            <li>
              <Link to="/schedule" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Schedule</Link>
            </li>
            <li>
              <Link to="/announcements" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Announcements</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      
      {/* Podium Leaderboard with custom colors */}
      <div className="relative z-10">
        <PodiumLeaderboard />
      </div>

      {/*<Footer />} */}
    </div>
  )
}

export default Prizes
