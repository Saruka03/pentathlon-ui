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

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Racing Sans One', cursive" }}>Pentathlon</h3>
          <p className="mt-4 text-white/60 text-sm">
            
          </p>
        </div>

        {/* Event */}
        <div>
          <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Racing Sans One', cursive" }}>Event</h4>
          <ul className="space-y-3 text-white/60 text-sm hover:*:text-white transition-all duration-300">
            <li className="cursor-pointer hover:translate-x-1 transition-transform">About</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Rounds</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Rules</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Schedule</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Racing Sans One', cursive" }}>Categories</h4>
          <ul className="space-y-3 text-white/60 text-sm hover:*:text-white transition-all duration-300">
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Maths</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Science</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">IT</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">GK</li>
            <li className="cursor-pointer hover:translate-x-1 transition-transform">Sports</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6" style={{ fontFamily: "'Racing Sans One', cursive" }}>Contact</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li>Email: officialausdav@gmail.com</li>
            <li>Phone: +94 77 428 7823</li>
            <li>Location: YMCA Road</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Pentathlon Quiz Competition. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
