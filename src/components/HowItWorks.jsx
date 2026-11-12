
import React from 'react'
import {
  UserPlus,
  FolderPlus,
  Rocket,
  ArrowRight
} from 'lucide-react'

export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Workspace",
      description: "Sign up and set up your personal workspace in just a few simple steps.",
      color: "bg-violet-100 text-violet-600"
    },
    {
      number: "02",
      icon: FolderPlus,
      title: "Organize Your Projects",
      description: "Create projects, add tasks and bring all your important work together.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Track Your Progress",
      description: "Monitor your team's progress and complete your goals with confidence.",
      color: "bg-pink-100 text-pink-600"
    }
  ]

  return (
    <section id="how-it-works" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Get started in
            <span className="text-violet-600"> three easy steps.</span>
          </h2>

          <p className="text-gray-500 text-lg leading-8 mt-5">
            Getting your work organized has never been easier.
            Start with a few simple steps and experience a smarter workflow.
          </p>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {steps.map((step, index) => {

            const Icon = step.icon

            return (
              <div key={index} className="relative">

                {/* Step Card */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-violet-100 transition duration-300">

                  <div className="flex items-center justify-between">

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.color}`}>
                      <Icon size={26} />
                    </div>

                    <span className="text-5xl font-bold text-gray-100">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-8">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-7 mt-4">
                    {step.description}
                  </p>

                </div>

                {/* Arrow */}
                {index !== 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-8 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-violet-600">
                    <ArrowRight size={18} />
                  </div>
                )}

              </div>
            )

          })}

        </div>

      </div>

    </section>
  )
}
