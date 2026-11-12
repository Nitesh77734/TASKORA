
import React from 'react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

export default function Pricing({ onStartFree }) {

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started.",
      price: "Free",
      period: "Forever",
      features: [
        "Up to 3 active projects",
        "Basic task management",
        "Personal workspace",
        "Basic progress tracking",
        "Community support"
      ],
      button: "Get Started",
      popular: false,
      action: "free"
    },
    {
      name: "Professional",
      description: "Everything you need to work smarter.",
      price: "$19",
      period: "per user / month",
      features: [
        "Unlimited active projects",
        "Advanced task management",
        "Team collaboration",
        "Advanced progress analytics",
        "Priority support"
      ],
      button: "Get Started",
      popular: true,
      action: "contact"
    }
  ]

  function handlePlanClick(plan) {

    if (plan.action === "free") {
      onStartFree()
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth"
      })
    }

  }

  return (
    <section id="pricing" className="bg-gray-50 py-20 px-5">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="text-blue-600 font-semibold text-sm">
            SIMPLE PRICING
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Plans that grow with you
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Start for free and upgrade when your team needs more power.
            Choose the plan that works best for you.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular
                  ? "border-blue-500 shadow-xl"
                  : "border-gray-200 shadow-sm"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                  <Sparkles size={14} />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-7 flex items-baseline gap-2">

                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>

                <span className="text-gray-500 text-sm">
                  {plan.period}
                </span>

              </div>

              {/* Button */}
              <button
                onClick={() => handlePlanClick(plan)}
                className={`w-full mt-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.button}
                <ArrowRight size={18} />
              </button>

              {/* Features */}
              <div className="mt-9">

                <h4 className="font-semibold text-gray-900 mb-5">
                  What's included:
                </h4>

                <ul className="space-y-4">

                  {plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600 text-sm"
                    >

                      <div className="bg-green-100 p-1 rounded-full">
                        <Check size={14} className="text-green-600" />
                      </div>

                      {feature}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
