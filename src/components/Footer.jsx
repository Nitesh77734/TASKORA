
import React from 'react'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-5 pt-14 pb-7">

      <div className="max-w-7xl mx-auto">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              TASKORA<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7 text-sm">
              Work smarter, stay organized and achieve more
              with Taskora.
            </p>

            <div className="flex gap-5 mt-5 text-gray-400 text-sm">
            <a href="#contact" className="hover:text-white">GitHub</a>
            <a href="#contact" className="hover:text-white">LinkedIn</a>
            <a href="#contact" className="hover:text-white">Twitter</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-5">Product</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white">About Us</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="font-semibold mb-5">Get Started</h3>

            <p className="text-gray-400 text-sm leading-6">
              Start organizing your work and achieve your goals.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl text-sm font-semibold transition"
            >
              Get Started
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-gray-500 text-sm">
          <p>© 2026 Taskora. All rights reserved.</p>
          <p>Designed with care for productive teams.</p>
        </div>

      </div>
    </footer>
  )
}
