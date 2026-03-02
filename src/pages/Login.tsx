import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setSuccess("Login successful! Redirecting...")
      setTimeout(() => navigate("/dashboard"), 1000)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
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

      {/* Login Card - Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md mx-4 p-8
          bg-white/10 backdrop-blur-2xl
          border border-white/15
          rounded-3xl
          shadow-2xl shadow-blue-500/20
          hover:shadow-blue-500/30
          hover:translate-y-[-2px]
          transition-all duration-300 ease-out"
      >
        {/* Glow effect behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-3xl blur-xl -z-10" />

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: "'Racing Sans One', cursive" }}>
            Login
          </h2>
          <p className="text-white/60">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-sm text-white/70 ml-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl
                bg-white/5
                border border-white/10
                text-white placeholder-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                transition-all duration-300"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="text-sm text-white/70 ml-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl
                  bg-white/5
                  border border-white/10
                  text-white placeholder-white/40
                  focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                  transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all duration-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* REMEMBER ME & FORGOT PASSWORD */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-white/60 cursor-pointer hover:text-white transition-all duration-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500/50 cursor-pointer"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all duration-300"
            >
              Forgot password?
            </a>
          </div>

          {/* MESSAGES */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-400 text-sm text-center">{success}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl
              bg-white/10 text-white font-medium
              border border-white/10
              hover:bg-white/20 hover:border-white/20
              hover:shadow-lg hover:shadow-cyan-500/20
              active:scale-[0.98]
              transition-all duration-300 ease-out
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-white/60 text-sm mt-8">
          Don't have an account?{" "}
          <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all">
            Register
          </a>
        </p>
      </motion.div>

      {/* Brand badge */}
      <div className="absolute bottom-6 text-center">
        <p className="text-white/40 text-sm">Pentathlon Quiz Competition</p>
      </div>
    </div>
  )
}

export default Login
