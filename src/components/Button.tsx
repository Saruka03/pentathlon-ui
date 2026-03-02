import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "outline"
  onClick?: () => void
}

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  const base =
    "px-10 py-4 rounded-full font-semibold transition-all duration-300 ease-out focus:outline-none cursor-pointer"

  const styles = {
    // Primary: White text on glass with subtle accent
    primary:
      "bg-white/10 text-white border border-white/20 backdrop-blur-lg " +
      "hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] " +
      "shadow-lg shadow-black/20",

    // Secondary: Transparent with border
    outline:
      "border border-white/20 text-white bg-transparent " +
      "hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] " +
      "backdrop-blur-sm",
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}

export default Button
