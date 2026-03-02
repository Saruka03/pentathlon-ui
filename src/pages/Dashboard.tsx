import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import DashboardCard from "../components/DashboardCard"
import { motion } from "framer-motion"
import { Megaphone } from "lucide-react"

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/login")
      }
    })
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND - LearnMore style */}
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

      {/* Main dashboard container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 min-h-screen flex flex-col items-center px-6 pt-24"
      >
        {/* Dashboard glass panel */}
        <div className="
          w-full max-w-6xl
          bg-white/10 backdrop-blur-2xl
          border border-white/15
          rounded-3xl
          shadow-2xl shadow-cyan-500/20
          p-10
        ">
          {/* Glow behind panel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-xl -z-10" />

          {/* Dashboard Title */}
          <h1 className="text-2xl font-semibold text-white tracking-wide mb-10" style={{ fontFamily: "'Racing Sans One', cursive" }}>
            Pentathlon Dashboard
          </h1>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Announcements"
              onClick={() => navigate("/dashboard/announcements")}
              icon={Megaphone}
            />
            <DashboardCard
              title="Register New Team"
              onClick={() => navigate("/dashboard/register-team")}
            />
            <DashboardCard
              title="Upload Documents"
              onClick={() => navigate("/dashboard/upload-documents")}
            />
            <DashboardCard
              title="Score Board – Round 1"
              onClick={() => navigate("/dashboard/scoreboard-round1")}
            />
            <DashboardCard
              title="Score Board – Round 2"
              onClick={() => navigate("/dashboard/scoreboard-round2")}
            />
            <DashboardCard
              title="Accounts"
              onClick={() => navigate("/dashboard/accounts")}
            />
          </div>
        </div>
      </motion.div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(2,6,23,0.6)_100%)]" pointer-events-none />
    </div>
  )
}

export default Dashboard
