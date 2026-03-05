import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
//import Footer from "../components/Footer"

const Schedule = () => {
  const timelineEvents = [
    {
      title: "Introduction Session",
      desc: "Round 1 explanation session (Online) – for all students.",
      side: "left",
      date: "22/02/2026"
    },
    {
      title: "Round 1",
      desc: "Online selection round for all schools.",
      side: "right",
      date: "01/03/2026"
    },
    {
      title: "Awareness Session",
      desc: "Online session explaining the final round procedure.",
      side: "left",
      date: "18/03/2026"
    },
    {
      title: "Final Round",
      desc: "Grand Finale for the selected teams.",
      side: "right",
      date: "21/03/2026"
    },
    {
      title: "Awarding Ceremony",
      desc: "Winner announcement and prize distribution.",
      side: "left",
      date: "21/03/2026"
    }
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
              <Link to="/about" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/rules" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Rules</Link>
            </li>
            <li>
              <Link to="/prizes" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Prizes</Link>
            </li>
            <li>
              <Link to="/schedule" className="text-cyan-400 font-semibold">Schedule</Link>
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
          <h1 
            className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Racing Sans One', cursive" }}
          >
            Time Line of Events
          </h1>

          {/* EVENT TIMELINE */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/20 -translate-x-1/2 rounded-full" />

            {timelineEvents.map((item, i) => {
              const isLeft = item.side === "left"

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
                        <MapPin className="text-white" size={26} />
                      </div>
                    </div>

                    <div
                      className={`hidden md:flex absolute top-1/2 -translate-y-1/2
                        ${isLeft ? "left-full ml-10" : "right-full mr-10"}
                        px-3 py-2 rounded-full bg-cyan-500/80 text-white font-bold text-sm whitespace-nowrap`}
                    >
                      {item.date}
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
                    <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/80 text-white font-bold">
                      {item.date}
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
        </div>
      </div>

    </div>
  )
}

export default Schedule
