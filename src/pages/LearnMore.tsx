import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Calculator, FlaskConical, Monitor, Globe, Trophy, MapPin, User, Megaphone, Image } from "lucide-react"
//import PodiumLeaderboard from "../components/PodiumLeaderboard"
import WinnerCards from "../components/WinnerCards"
import ScrollToTop from "../components/ScrollToTop"

const navItems = [
  { id: "about", label: "About", icon: User, navigateTo: "/learn-more#about" },
  { id: "announcements", label: "Announcements", icon: Megaphone, navigateTo: "/announcements" },
  { id: "scoreboard", label: "Score Board", icon: Trophy, navigateTo: "/learn-more#scoreboard" },
  { id: "memories", label: "Memories", icon: Image, navigateTo: "/learn-more#memories" }
]

const subjectData = [
  { icon: Calculator, label: "Maths", desc: "Logic, numbers, and problem-solving challenges", shortDesc: "Logic & numbers" },
  { icon: FlaskConical, label: "Science", desc: "Discover the wonders of physics, chemistry & biology", shortDesc: "Physics, chemistry & biology" },
  { icon: Trophy, label: "Sports", desc: "Test your knowledge of games and athletes", shortDesc: "Games & athletes" },
  { icon: Globe, label: "GK", desc: "Current affairs, history, and world knowledge", shortDesc: "History & current affairs" },
  { icon: Monitor, label: "IT", desc: "Technology, computers, and digital innovation", shortDesc: "Tech & innovation" }
]

const LearnMore: React.FC = () => {
  const [activeNav, setActiveNav] = useState("about")
  const navigate = useNavigate()
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null)

  const handleNavClick = (id: string, navigateTo?: string) => {
    if (navigateTo) {
      navigate(navigateTo)
    } else {
      setActiveNav(id)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: "'Racing Sans One', cursive" }}>
            Pentathlon
          </div>
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navItems.map(({ id, label, icon: Icon, navigateTo }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id, navigateTo)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeNav === id
                      ? "bg-white/20 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative min-h-screen overflow-x-hidden"
      >
        {/* BACKGROUND - Home style */}
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

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:px-10 md:py-32
                     backdrop-blur-md bg-white/5 rounded-3xl
                     border border-white/10 shadow-2xl shadow-black/20 mt-20"
        >
          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
              FOCUS <span className="text-white/60">STREAM</span>
            </h2>
          </div>

          <p className="mt-8 text-white/70 text-lg text-center italic">
          </p>

          {/* ================= FOCUS STREAM - ABOUT ================= */}
          <div id="about" className="mt-28">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Half - Intro Text */}
                <div className="text-left order-2 md:order-1">
                  <h3 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                    About Focus Stream
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Step into a thrilling arena where curiosity becomes power and knowledge turns into victory. Explore five dynamic worlds — numbers, discovery, competition, awareness, and technology — each designed to challenge your thinking and spark your brilliance. Choose your strength, trust your instincts, and compete with confidence to shine above the rest.
                  </p>
                </div>

              {/* Right Half - Pentagon Diagram */}
              <div className="relative flex justify-center items-center h-[520px]">
                <div className="absolute inset-0">
                  {[...Array(40)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </div>

                <div className="relative flex justify-center items-center">
                  {/* SUBJECT ICONS with Hover Tooltips */}
                  {subjectData.map(({ icon: Icon, label, shortDesc }, i) => {
                    const angle = -90 + i * 72
                    const r = 200
                    const x = r * Math.cos((angle * Math.PI) / 180)
                    const y = r * Math.sin((angle * Math.PI) / 180)

                    return (
                      <motion.div
                        key={label}
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                        className="absolute flex flex-col items-center gap-3"
                        onMouseEnter={() => setHoveredSubject(label)}
                        onMouseLeave={() => setHoveredSubject(null)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="relative cursor-pointer w-20 h-20 rounded-full bg-white/10
                                     border border-white/30
                                     shadow-[0_0_35px_rgba(255,255,255,0.3)]
                                     backdrop-blur-md flex items-center justify-center"
                        >
                          <Icon size={30} className="text-white" />
                          
                          {/* Hover Tooltip */}
                          <AnimatePresence>
                            {hoveredSubject === label && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-full mb-3 px-3 py-2 bg-white/20 backdrop-blur-lg 
                                           border border-white/30 rounded-lg whitespace-nowrap z-20"
                              >
                                <p className="text-white text-xs font-medium">{shortDesc}</p>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                                              border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/20" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        <span className="text-sm text-white/70">{label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ================= EVENT TIMELINE ================= */}
          <motion.div
            id="announcements"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                EVENT <span className="text-white/60">TIMELINE</span>
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/20 -translate-x-1/2 rounded-full" />

              {[
                {
                  title: "Introduction Session",
                  desc: "Round 1 explanation session (Online) – for all students.",
                  side: "left",
                  icon: MapPin
                },
                {
                  title: "Round 1",
                  desc: "Online selection round for all schools.",
                  side: "right",
                  icon: MapPin
                },
                {
                  title: "Awareness Session",
                  desc: "Online session explaining the final round procedure.",
                  side: "left",
                  icon: MapPin
                },
                {
                  title: "Final Round",
                  desc: "Grand Finale for the selected teams.",
                  side: "right",
                  icon: MapPin
                },
                {
                  title: "Awarding Ceremony",
                  desc: "Winner announcement and prize distribution.",
                  side: "left",
                  icon: MapPin
                }
              ].map((item, i) => {
                const Icon = item.icon
                const isLeft = item.side === "left"
                const number = String(i + 1).padStart(2, "0")

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12 }}
                    viewport={{ once: false }}
                    className="relative grid grid-cols-1 md:grid-cols-[1fr_120px_1fr] items-center gap-6 py-10"
                  >
                    {/* LEFT CONTENT */}
                    <div
                      className={`${
                        isLeft
                          ? "md:pr-10 text-right"
                          : "md:opacity-0 md:pointer-events-none"
                      }`}
                    >
                      {isLeft && (
                        <>
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-white/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </>
                      )}
                    </div>

                    {/* CENTER ICON NODE */}
                    <div className="relative flex justify-center">
                      <div
                        className={`hidden md:block absolute top-1/2 w-24 border-t-2 border-dotted border-white/30
                          ${isLeft ? "right-full mr-4" : "left-full ml-4"}`}
                      />

                      <div
                        className="relative z-10 w-20 h-20 rounded-full bg-white/5 border border-white/30
                                   shadow-[0_0_35px_rgba(255,255,255,0.3)]
                                   backdrop-blur-md flex items-center justify-center"
                      >
                        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                          <Icon className="text-white" size={26} />
                        </div>
                      </div>

                      <div
                        className={`hidden md:flex absolute top-1/2 -translate-y-1/2
                          ${isLeft ? "left-full ml-10" : "right-full mr-10"}
                          px-5 py-2 rounded-full bg-white/20 text-white font-bold tracking-wider`}
                      >
                        {number}
                      </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                      className={`${
                        !isLeft
                          ? "md:pl-10 text-left"
                          : "md:opacity-0 md:pointer-events-none"
                      }`}
                    >
                      {!isLeft && (
                        <>
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-white/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden mt-4 text-center">
                      <div className="inline-flex px-4 py-2 rounded-full bg-white/20 text-white font-bold">
                        {number}
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ================= PODIUM LEADERBOARD ================= */}
          <motion.div
            id="scoreboard"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                Prizes <span className="text-white/60"></span>
              </h2>
            </div>
            <WinnerCards />
          </motion.div>

          {/* ================= MEMORIES ================= */}
          <motion.div
            id="memories"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-28 text-center"
          >
            <div className="text-center mb-16">
              
            </div>
          </motion.div>

        </motion.div>

        {/* FOOTER */}
        <footer className="relative z-10 bg-white/5 backdrop-blur-lg border-t border-white/10 py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Pentathlon. All rights reserved.
            </p>
          </div>
        </footer>

      </motion.section>

      <ScrollToTop />
    </>
  )
}

export default LearnMore
