
import React from 'react'
import { 
  LayoutDashboard, 
  Users, 
  ChartNoAxesCombined,
  ArrowUpRight
} from 'lucide-react'

export default function Features() {

  const features = [
    {
      icon: LayoutDashboard,
      title: "Smart Task Management",
      description: "Organize your daily tasks, set priorities and manage every project from one simple workspace.",
      color: "bg-violet-100 text-violet-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Bring your team together, share ideas and keep everyone connected throughout the project.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: ChartNoAxesCombined,
      title: "Progress Analytics",
      description: "Track project performance, monitor progress and make smarter decisions with clear insights.",
      color: "bg-pink-100 text-pink-600"
    }
  ]

  return (
    <section id="features" className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            Powerful Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Everything you need to
            <span className="text-violet-600"> work better.</span>
          </h2>

          <p className="text-gray-500 text-lg mt-5 leading-8">
            Simplify your workflow with powerful tools designed
            to help you stay focused, organized and productive.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">

          {features.map((feature, index) => {

            const Icon = feature.icon

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-violet-200 hover:shadow-xl transition duration-300 group"
              >

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color}`}>
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-7">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-7 mt-4">
                  {feature.description}
                </p>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-violet-600 font-semibold mt-7 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowUpRight size={18} />
                </a>

              </div>
            )

          })}

        </div>

      </div>

    </section>
  )
}
