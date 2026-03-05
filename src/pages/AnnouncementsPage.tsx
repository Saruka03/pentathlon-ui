import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { supabase } from "../lib/supabase"

interface Announcement {
  id: string
  comment: string
  image_url: string
  created_at: string
}

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  /* Fetch Announcements */
  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from("announcements")
      .select("id, comment, image_url, created_at")
      .order("created_at", { ascending: false })

    if (data) setAnnouncements(data)
    if (error) console.error("Fetch error:", error)
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

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
              <Link to="/schedule" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Schedule</Link>
            </li>
            <li>
              <Link to="/announcements" className="text-cyan-400 font-semibold">Announcements</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-6xl mx-auto
            bg-white/5 backdrop-blur-md
            border border-white/10
            rounded-3xl
            shadow-2xl shadow-black/20
            p-10
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-semibold text-white tracking-wide">
              Announcements
            </h1>
          </div>

          {/* Announcements List */}
          <div className="flex flex-col gap-6">
            {announcements.length === 0 ? (
              <div className="text-center text-white/50 py-12">
                No announcements yet
              </div>
            ) : (
              announcements.map((announcement) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    flex flex-row gap-6
                    bg-white/5 backdrop-blur-lg
                    border border-white/10
                    rounded-2xl
                    overflow-hidden
                    hover:bg-white/10 hover:border-white/20
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                    transition-all duration-300
                  "
                >
                  {announcement.image_url && (
                    <div className="w-1/3 min-w-[200px] max-w-[300px] overflow-hidden">
                      <img
                        src={announcement.image_url}
                        alt="Announcement"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <p className="text-white/90 whitespace-pre-wrap">
                      {announcement.comment}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnnouncementsPage
