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
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of satisfied venues that trust NightShield for their security needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-2xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
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
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Start protecting your venue with the same AI technology trusted by hundreds of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-lg px-8 py-4 hover:scale-105 active:scale-95"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary text-lg px-8 py-4 hover:scale-105 active:scale-95"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
