import { Link } from "react-router-dom"
import pentathlonLogo from "/pentathlon.png"

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#050816] border-t border-white/10">
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

      <div className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <img src={pentathlonLogo} alt="Pentathlon Logo" className="h-24 w-auto mb-2" />
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>Pentathlon</h3>
        </div>

        {/* Event */}
        <div>
          <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>Event</h4>
          <ul className="space-y-2 text-white/60 text-sm hover:*:text-white transition-all duration-300">
            <li><Link to="/about" className="cursor-pointer hover:translate-x-1 transition-transform block">About</Link></li>
            <li><Link to="/rules" className="cursor-pointer hover:translate-x-1 transition-transform block">Rules</Link></li>
            <li><Link to="/prizes" className="cursor-pointer hover:translate-x-1 transition-transform block">Prizes</Link></li>
            <li><Link to="/schedule" className="cursor-pointer hover:translate-x-1 transition-transform block">Schedule</Link></li>
            <li><Link to="/announcements" className="cursor-pointer hover:translate-x-1 transition-transform block">Announcements</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>Social Media</h4>
          <ul className="space-y-2 text-white/60 text-sm hover:*:text-white transition-all duration-300">
            <li>
              <a 
                href="https://www.facebook.com/ausdavmail/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:translate-x-1 transition-transform block flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://ausdav.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:translate-x-1 transition-transform block flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Website
              </a>
            </li>
            <li>
              <a 
                href="http://www.youtube.com/@AUSDAV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:translate-x-1 transition-transform block flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </li>
            <li>
              <a 
                href="https://lk.linkedin.com/company/all-university-students-development-association-vavuniya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:translate-x-1 transition-transform block flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "'Racing Sans One', cursive" }}>Contact</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Email: officialausdav@gmail.com</li>
            <li>Phone: +94 77 428 7823</li>
            <li>Location: YMCA Road</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 py-3 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} Pentathlon Quiz Competition. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
