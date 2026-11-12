
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'Features', link: '#features' },
    { name: 'How It Works', link: '#how-it-works' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Contact', link: '#contact' }
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          TASKORA<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-600 hover:text-blue-600 transition text-sm font-medium"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition text-sm font-semibold"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-5 py-5">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-blue-600 text-white text-center py-3 rounded-xl font-semibold"
            >
              Get Started
            </a>

          </div>

        </nav>
      )}

    </header>
  )
}
