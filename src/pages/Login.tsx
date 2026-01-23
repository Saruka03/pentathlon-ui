import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import { Eye, EyeOff } from "lucide-react"
import bg from "../assets/bg.jpg"
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
      options: {
        shouldCreateUser: false,
      },
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[380px] p-10 rounded-2xl space-y-6
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <h2 className="text-center text-3xl font-bold text-white">
          ADMIN LOGIN
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-full
          bg-white/20 text-white placeholder-white/70
          focus:outline-none focus:ring-2 focus:ring-white/40"
          required
        />

        {/* PASSWORD */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-full
            bg-white/20 text-white placeholder-white/70
            focus:outline-none focus:ring-2 focus:ring-white/40"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-white/70"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* REMEMBER ME */}
        <div className="flex justify-between items-center text-sm text-white/80">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me
          </label>
        </div>

        {/* MESSAGES */}
        {error && <p className="text-red-300 text-sm text-center">{error}</p>}
        {success && (
          <p className="text-green-300 text-sm text-center">{success}</p>
        )}

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-full
          bg-black/70 text-white font-semibold
          hover:bg-black transition
          disabled:opacity-50"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </motion.form>
    </div>
  )
}

export default Login
