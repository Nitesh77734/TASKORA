
import React from 'react'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-white overflow-hidden ">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">

        {/* Left Content */}
        <div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-7">
            <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
            Your smarter workspace starts here
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Work smarter.
            <span className="text-violet-600"> Achieve more.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 mt-6 max-w-xl">
            Bring your projects, tasks and team together in one
            powerful workspace. Stay organized, save time and
            turn your ideas into meaningful results.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-9">

            <a
              href="#pricing"
              className="flex items-center gap-2 bg-violet-600 text-white px-7 py-4 rounded-xl font-semibold hover:bg-violet-700 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="flex items-center gap-2 border border-gray-200 text-gray-700 px-7 py-4 rounded-xl font-semibold hover:bg-gray-50 transition"
            >
              <Play size={17} />
              How it works
            </a>

          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap gap-5 mt-9 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-500" />
              Easy to use
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-500" />
              Team friendly
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-500" />
              Stay organized
            </div>

          </div>

        </div>

        {/* Right Dashboard Visual */}
        <div className="relative">

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl p-5">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-5">

              <div>
                <p className="text-sm text-gray-400">Workspace</p>
                <h3 className="text-xl font-bold text-gray-900">
                  Project Overview
                </h3>
              </div>

              <div className="bg-violet-100 text-violet-700 px-3 py-2 rounded-lg text-sm font-semibold">
                This Week
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="bg-violet-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Total Projects</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">24</h2>
                <p className="text-xs text-green-600 mt-2">+12% this month</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Tasks Completed</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">86%</h2>
                <p className="text-xs text-green-600 mt-2">+8% this week</p>
              </div>

            </div>

            {/* Project Progress */}
            <div className="mt-7 ">

              <h3 className="font-bold text-gray-900 mb-5">
                Project Progress
              </h3>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Website Redesign</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-violet-600 w-[85%] h-2 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Mobile Application</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 w-[65%] h-2 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Marketing Campaign</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-pink-500 w-[45%] h-2 rounded-full"></div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Activity */}
            <div className="mt-7 bg-gray-50 rounded-2xl p-4 flex items-center justify-between">

              <div>
                <p className="text-xs text-gray-400">Team Activity</p>
                <p className="font-semibold text-gray-800 mt-1">
                  Everything is on track!
                </p>
              </div>

              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-violet-500 border-2 border-white"></div>
                <div className="w-9 h-9 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-9 h-9 rounded-full bg-pink-500 border-2 border-white"></div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
