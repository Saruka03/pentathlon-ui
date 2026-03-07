import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, FlaskConical, Monitor, Globe, Trophy } from "lucide-react"
//import Footer from "../components/Footer"

const subjectData = [
  { icon: Calculator, label: "Maths", desc: "Logic, numbers, and problem-solving challenges", shortDesc: "Logic & numbers" },
  { icon: FlaskConical, label: "Science", desc: "Discover the wonders of physics, chemistry & biology", shortDesc: "Physics, chemistry & biology" },
  { icon: Trophy, label: "Sports", desc: "Test your knowledge of games and athletes", shortDesc: "Games & athletes" },
  { icon: Globe, label: "GK", desc: "Current affairs, history, and world knowledge", shortDesc: "History & current affairs" },
  { icon: Monitor, label: "IT", desc: "Technology, computers, and digital innovation", shortDesc: "Tech & innovation" }
]

const About = () => {
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null)

  // Static star positions to avoid impure function during render
  const starPositions = [
    { top: '10%', left: '20%' },
    { top: '25%', left: '45%' },
    { top: '15%', left: '70%' },
    { top: '40%', left: '15%' },
    { top: '55%', left: '35%' },
    { top: '50%', left: '60%' },
    { top: '70%', left: '25%' },
    { top: '75%', left: '50%' },
    { top: '65%', left: '75%' },
    { top: '85%', left: '40%' },
    { top: '30%', left: '85%' },
    { top: '80%', left: '70%' },
    { top: '5%', left: '50%' },
    { top: '90%', left: '55%' },
    { top: '35%', left: '5%' },
  ]

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
              <Link to="/about" className="text-cyan-400 font-semibold">About</Link>
            </li>
            <li>
              <Link to="/rules" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Rules</Link>
            </li>
            <li>
              <Link to="/prizes" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Prizes</Link>
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
      <div className="relative pt-12 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* FOCUS STREAM SECTION */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                FOCUS <span className="text-white/60">STREAM</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Half - Intro Text */}
              <div className="text-left order-2 md:order-1">
                <h3 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                  About Focus Stream
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Step into a thrilling arena where curiosity becomes power and knowledge turns into victory. Explore five dynamic worlds — numbers, discovery, competition, awareness, and technology — each designed to challenge your thinking and spark your brilliance. Choose your strength, trust your instincts, and compete with confidence to shine above the rest.
                </p>
              </div>

              {/* Right Half - Pentagon Diagram */}
              <div className="relative flex justify-center items-center h-[500px] order-1 md:order-2">
                <div className="absolute inset-0">
                  {starPositions.map((pos, i) => (
                    <span
                      key={i}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      style={{
                        top: pos.top,
                        left: pos.left
                      }}
                    />
                  ))}
                </div>

                <div className="relative flex justify-center items-center">
                  {/* SUBJECT ICONS with Hover Tooltips */}
                  {subjectData.map(({ icon: Icon, label, shortDesc }, i) => {
                    const angle = -90 + i * 72
                    const r = 180
                    const x = r * Math.cos((angle * Math.PI) / 180)
                    const y = r * Math.sin((angle * Math.PI) / 180)

                    return (
                      <motion.div
                        key={label}
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                        className="absolute flex flex-col items-center gap-2"
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
                          <Icon size={28} className="text-white" />
                          
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

          {/* HTML PRACTICE SECTION */}
          <div className="mt-24">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                HTML <span className="text-white/60">PRACTICE</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                Learn HTML easily with this beginner-friendly practice page designed especially for school students. It provides simple examples and hands-on exercises to help you understand the basics of HTML step by step. Explore, experiment, and build your own web pages while improving your web development skills in a fun and interactive way.
              </p>
              
              <a 
                href="https://piri2611.github.io/HTML_Practice/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:text-cyan-300 transition-all duration-300 cursor-pointer"
              >
                Start Practicing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* QUIZ PRACTICE SECTION */}
          <div className="mt-24">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                QUIZ <span className="text-white/60">PRACTICE</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                Practice your knowledge with our interactive quiz platform designed for school students. It includes questions from subjects like Science, Mathematics, IT, GK, and Sports. Students can test their understanding, improve their thinking skills, and prepare for competitions while learning in a fun and engaging way.
              </p>
              
              <a 
                href="https://www.ausdav.org/quiz/1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:text-cyan-300 transition-all duration-300 cursor-pointer"
              >
                Start Quiz
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* MEMORIES SECTION */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                MEMORIES
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['im1.jpeg', 'im2.jpeg', 'im3.jpeg', 'im4.jpeg', 'im5.jpeg', 'im6.jpeg', 'im7.jpeg', 'im8.jpeg'].map((photo, index) => (
                <motion.div
                  key={photo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg border border-white/20"
                >
                  <img 
                    src={`/pentathlon-ui/photos/${photo}`} 
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
