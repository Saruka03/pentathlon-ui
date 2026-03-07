import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { User, Megaphone, Trophy, Image } from "lucide-react"

interface Announcement {
  id: string
  comment: string
  image_url: string
  created_at: string
}

interface ViewAnnouncementsProps {
  onClose?: () => void
}

const navItems = [
  { id: "about", label: "About", icon: User, navigateTo: "/learn-more" },
  { id: "announcements", label: "Announcements", icon: Megaphone, navigateTo: "/announcements" },
  { id: "scoreboard", label: "Score Board", icon: Trophy, navigateTo: "/learn-more#scoreboard" },
  { id: "memories", label: "Memories", icon: Image, navigateTo: "/learn-more#memories" }
]

const ViewAnnouncements: React.FC<ViewAnnouncementsProps> = ({ onClose }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [activeNav] = useState("announcements")
  const navigate = useNavigate()

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

  const handleNavClick = (navigateTo?: string) => {
    if (navigateTo) {
      navigate(navigateTo)
    }
  }

  return (
    <>
      {/* Main container - Announcements page style */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Layer 0: Dark night-sky base */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Layer 1: Deep atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_#0f172a_0%,_#020617_60%,_#01040a_100%)]" />

        {/* Layer 2: City light haze - warm amber glow at horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-[linear-gradient(to_top,#1e3a5f_0%,_transparent_100%)]" />
        <div className="absolute bottom-[5%] left-[20%] w-[60%] h-[30vh] bg-amber-500/5 blur-[80px]" />

        {/* Layer 3: Primary sky glow - blue/cyan aurora effect */}
        <div className="absolute top-[15%] left-[5%] w-[70%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-600/10 to-transparent blur-[140px]" />

        {/* Layer 4: Secondary glow - violet/purple */}
        <div className="absolute top-[25%] right-[0%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_right_center,_var(--tw-gradient-stops))] from-violet-600/15 via-purple-600/8 to-transparent blur-[160px]" />

        {/* Layer 5: Pink accent - city neon feel */}
        <div className="absolute top-[40%] left-[25%] w-[30%] h-[30%] bg-pink-500/10 rounded-full blur-[100px]" />

        {/* Layer 6: Skyline silhouette effects */}
        <div className="absolute bottom-0 left-[10%] w-[25%] h-[15vh] bg-[#0a1628]/60 rounded-t-[100%] blur-[60px]" />
        <div className="absolute bottom-0 left-[40%] w-[35%] h-[20vh] bg-[#0d1f3c]/50 rounded-t-[120%] blur-[80px]" />
        <div className="absolute bottom-0 right-[15%] w-[30%] h-[18vh] bg-[#0a1628]/55 rounded-t-[100%] blur-[70px]" />

        {/* Layer 7: Star fields */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle, white 0.5px, transparent 0.5px)`,
          backgroundSize: "80px 80px"
        }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "120px 120px"
        }} />

        {/* Layer 8: Atmospheric scattering */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.08)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(139,92,246,0.06)_0%,_transparent_40%)]" />

        {/* Layer 9: Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_60%,_rgba(2,6,23,0.4)_100%)]" />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/3 backdrop-blur-[1px]" />

        {/* NAVIGATION BAR */}
        <nav className="relative z-20 w-full bg-white/10 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-white font-bold text-2xl tracking-tight">
              Pentathlon
            </div>
            <ul className="flex items-center gap-8 text-sm font-medium">
              {navItems.map(({ id, label, icon: Icon, navigateTo }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(navigateTo)}
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

        {/* ANNOUNCEMENTS CONTENT */}
        <div className="relative z-10 min-h-screen px-6 py-12">
          {/* Close button */}
          {onClose && (
            <button
              onClick={onClose}
              className="mb-6 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              ← Back
            </button>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Glass panel - Announcements card style */}
            <div className="
              bg-white/10 backdrop-blur-2xl
              border border-white/15
              rounded-3xl
              shadow-2xl shadow-blue-500/20
              p-10
            ">
              {/* Glow behind panel */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-xl -z-10" />

              <h1 className="text-3xl font-semibold text-white tracking-wide text-center mb-12">
                Announcements
              </h1>

              <div className="flex flex-col gap-6">
                {announcements.map((announcement) => (
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
                      <p className="text-white/50 text-sm mt-4">
                        {new Date(announcement.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {announcements.length === 0 && (
                <div className="text-center text-white/50 py-12">
                  No announcements yet
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-white/5 backdrop-blur-lg border-t border-white/10 py-8">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Pentathlon. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ViewAnnouncements
