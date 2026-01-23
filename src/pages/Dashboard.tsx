import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import DashboardCard from "../components/DashboardCard"
import bg from "../assets/bg.jpg"
import { motion } from "framer-motion"

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
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-6xl
          bg-white/10
          backdrop-blur-xl
          rounded-3xl
          p-10
          shadow-2xl
          border border-white/20
        "
      >
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Pentathlon Dashboard
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </motion.div>
    </div>
  )
}

export default Dashboard
