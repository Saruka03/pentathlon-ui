import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = ["home", "about", "categories", "contact"]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(section)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (id: string) =>
    `cursor-pointer transition ${
      active === id ? "text-white font-semibold" : "text-gray-400 hover:text-white"
    }`

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-bold text-xl">
          Pentathlon
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#categories" className={linkClass("categories")}>Categories</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-6 space-y-4 text-sm">
              <li><a href="#home" onClick={() => setOpen(false)} className={linkClass("home")}>Home</a></li>
              <li><a href="#about" onClick={() => setOpen(false)} className={linkClass("about")}>About</a></li>
              <li><a href="#categories" onClick={() => setOpen(false)} className={linkClass("categories")}>Categories</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)} className={linkClass("contact")}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
