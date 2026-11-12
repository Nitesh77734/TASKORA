
import React, { useState } from 'react'
import { Send, Mail } from 'lucide-react'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setSuccess(true)

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 px-5">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* Left Content */}
        <div>
          <span className="text-blue-600 font-semibold text-sm">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Let's make your work easier.
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            Have questions about Taskora? Send us a message
            and our team will get back to you.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Mail className="text-blue-600" />
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Email Us
              </p>
              <p className="text-gray-500 text-sm">
                hello@taskora.app
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-7 md:p-9 rounded-3xl shadow-sm border border-gray-100">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              Send Message
              <Send size={18} />
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                Your message has been submitted successfully!
              </p>
            )}

          </form>
        </div>

      </div>

    </section>
  )
}
