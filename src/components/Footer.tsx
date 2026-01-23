const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">Pentathlon</h3>
          <p className="mt-4 text-gray-400 text-sm">
            
          </p>
        </div>

        {/* Event */}
        <div>
          <h4 className="text-white font-semibold mb-4">Event</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Rounds</li>
            <li className="hover:text-white cursor-pointer">Rules</li>
            <li className="hover:text-white cursor-pointer">Schedule</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Maths</li>
            <li>Science</li>
            <li>IT</li>
            <li>GK</li>
            <li>Sports</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: officialausdav@gmail.com</li>
            <li>Phone: +94 77 428 7823</li>
            <li>Location: YMCA Road</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pentathlon Quiz Competition. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
