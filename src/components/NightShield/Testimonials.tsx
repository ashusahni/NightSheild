'use client'

import React from 'react'

import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "The Blue Moon Club",
      rating: 5,
      content: "NightShield has completely transformed our security operations. We've seen an 80% reduction in incidents since implementation. The AI detection is incredibly accurate and the response time is lightning fast.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Security Manager",
      company: "Royal Casino",
      rating: 5,
      content: "The facial recognition and threat detection capabilities are outstanding. Our security team can now focus on prevention rather than reaction. NightShield has become an essential part of our operations.",
      avatar: "👨‍💼"
    },
    {
      name: "Emma Rodriguez",
      role: "General Manager",
      company: "Pulse Nightclub",
      rating: 5,
      content: "The mobile app alerts are game-changing. Our security staff receives instant notifications and can respond immediately. The system has paid for itself many times over in prevented incidents.",
      avatar: "👩‍💼"
    },
    {
      name: "David Thompson",
      role: "Operations Director",
      company: "Grand Hotel & Resort",
      rating: 5,
      content: "NightShield's analytics dashboard provides invaluable insights into our security patterns. The cloud storage and backup features give us peace of mind. Highly recommended for any hospitality business.",
      avatar: "👨‍💼"
    },
    {
      name: "Lisa Park",
      role: "Event Coordinator",
      company: "Metro Convention Center",
      rating: 5,
      content: "For large events, NightShield's crowd monitoring is invaluable. We can detect potential issues before they escalate and ensure the safety of all attendees. The system is incredibly reliable.",
      avatar: "👩‍💼"
    },
    {
      name: "James Wilson",
      role: "Bar Manager",
      company: "The Rustic Pub",
      rating: 5,
      content: "As a smaller venue, we were concerned about the cost, but NightShield's Starter plan is perfect for us. The AI detection has helped us prevent numerous incidents and keep our customers safe.",
      avatar: "👨‍💼"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))
  }

  return (
    <div className="mb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-400">Join hundreds of satisfied venues that trust NightShield for their security needs</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:bg-gray-900/70 hover:border-gray-700 transition-all group"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-2xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white group-hover:text-red-100 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-3">500+</div>
            <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Happy Clients</div>
            <div className="text-sm md:text-base text-gray-500">Active deployments worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-3">4.9/5</div>
            <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Average Rating</div>
            <div className="text-sm md:text-base text-gray-500">Customer satisfaction score</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-3">98%</div>
            <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Satisfaction Rate</div>
            <div className="text-sm md:text-base text-gray-500">Client retention rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-3">24/7</div>
            <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Support Available</div>
            <div className="text-sm md:text-base text-gray-500">Round-the-clock assistance</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              Start protecting your venue with the same AI technology trusted by hundreds of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-gray-600 hover:border-gray-500 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
