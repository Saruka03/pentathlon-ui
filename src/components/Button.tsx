import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "outline"
  onClick?: () => void
}

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  const base =
    "px-10 py-4 rounded-full font-semibold transition focus:outline-none"

  const styles = {
    primary: "bg-primary hover:bg-secondary text-white",
    outline: "border border-white/20 hover:border-white text-white",
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}

export default Button
