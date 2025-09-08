'use client';

import React from 'react';
import { IconShieldLock, IconTrendingUp, IconUsers, IconEye, IconRocket, IconBuildingArch, IconBrain, IconAward, IconHeart, IconTarget, IconCheck, IconStar, IconGlobe, IconShieldCheck, IconSparkles, IconBolt, IconShield } from '@tabler/icons-react';
import CountUp from 'react-countup';
import Contact from '@/components/NightShield/Contact'


const AboutPage = () => {
  const founder = {
    name: 'Stilyan Delgyanski',
    role: 'Founder',
    bio: `I didn't grow up with a safety net. I learned to sell on the phone, take rejection on the chin, and keep going. Seven years of kickboxing gave me routine and patience. The SIA badge put me on the door and in CCTV rooms where decisions actually matter. That's where my bar was set: be useful, be calm, act fast.

What I care about:
• Show up every day, not just when it's exciting.
• Keep things simple and honest—no fluff.
• Let results do the talking.`,
    image: '/images/founder.jpg'
  };

  const milestones = [
    { year: '2023', event: 'NightShield is Born', icon: <IconRocket size={32} /> },
    { year: '2024', event: 'First 50 Venues Secured', icon: <IconBuildingArch size={32} /> },
    { year: '2025', event: 'Achieved 99.9% Detection Accuracy', icon: <IconEye size={32} /> },
    { year: '2026', event: 'Expanded to 25+ Countries', icon: <IconTrendingUp size={32} /> },
  ];

  const stats = [
    { value: 10, label: 'Venues Protected', suffix: '+' },
    { value: 1000, label: 'Threats Detected', suffix: '+' },
    { value: 99.9, label: 'Detection Accuracy', suffix: '%', decimals: 1 },
  ];

  const values = [
    {
      icon: <IconShieldCheck size={48} className="text-red-500" />,
      title: 'Uncompromising Security',
      description: 'We believe that safety is not a luxury but a fundamental right. Every decision we make is guided by the principle of protecting what matters most.'
    },
    {
      icon: <IconBrain size={48} className="text-red-500" />,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of what\'s possible, leveraging cutting-edge AI to stay ahead of evolving threats.'
    },
    {
      icon: <IconHeart size={48} className="text-red-500" />,
      title: 'Human-Centric Design',
      description: 'Technology serves people, not the other way around. We design solutions that empower security personnel and venue operators.'
    },
    {
      icon: <IconGlobe size={48} className="text-red-500" />,
      title: 'Global Impact',
      description: 'We\'re committed to making the world safer, one venue at a time, regardless of size or location.'
    }
  ];

  const technologies = [
    {
      name: 'Advanced AI Detection',
      description: 'Our proprietary algorithms can identify potential threats in real-time with 99.9% accuracy, even in challenging lighting conditions.',
      features: ['Behavioral Analysis', 'Pattern Recognition', 'Predictive Modeling']
    },
    {
      name: 'Edge Computing',
      description: 'Processing happens locally for instant response times, ensuring no delay between threat detection and alert generation.',
      features: ['Real-time Processing', 'Low Latency', 'Offline Capability']
    },
    {
      name: 'Cloud Integration',
      description: 'Seamless cloud connectivity for remote monitoring, analytics, and system updates without compromising security.',
      features: ['Remote Access', 'Data Analytics', 'Over-the-air Updates']
    }
  ];

  const customerStories = [
    {
      venue: 'The Grand Plaza Hotel',
      industry: 'Hospitality',
      challenge: 'Managing security across 500+ rooms and multiple event spaces',
      solution: 'Implemented NightShield across all areas with centralized monitoring',
      result: 'Reduced security incidents by 85% and improved guest satisfaction scores'
    },
    {
      venue: 'Metro Convention Center',
      industry: 'Events & Conferences',
      challenge: 'Crowd control and threat detection during large-scale events',
      solution: 'Deployed AI-powered crowd analysis and threat detection systems',
      result: 'Successfully managed events with 50,000+ attendees with zero security breaches'
    },
    {
      venue: 'Downtown Shopping Mall',
      industry: 'Retail',
      challenge: 'Preventing theft and ensuring customer safety in a high-traffic environment',
      solution: 'Integrated NightShield with existing security infrastructure',
      result: 'Decreased theft incidents by 70% and improved emergency response times'
    }
  ];

  const awards = [
    { year: '2024', title: 'Best AI Security Solution', organization: 'Security Innovation Awards' },
    { year: '2024', title: 'Startup of the Year', organization: 'TechCrunch Disrupt' },
    { year: '2023', title: 'Excellence in Computer Vision', organization: 'AI Research Institute' },
    { year: '2023', title: 'Most Innovative Security Product', organization: 'International Security Expo' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 px-4">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon with glow effect */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150"></div>
                <div className="relative bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl shadow-2xl">
                  <IconShield size={32} className="text-white" />
                </div>
              </div>
              
              {/* Main heading with gradient text */}
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Beyond Surveillance.
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  We Are Your Night Shield.
                </span>
              </h1>
              
              {/* Subtitle with modern styling */}
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
                In an unpredictable world, venue safety is non-negotiable. NightShield was founded by security veterans
                and AI pioneers to shift from reactive recording to proactive protection.
              </p>
              
              {/* Call to action with modern button */}
              <div>
                <button className="group relative px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <IconBolt size={18} />
                    Discover Our Story
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
       

        {/* Values Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Core Values</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The principles that drive everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group relative">
                  {/* Glassmorphism card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Icon with glow */}
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-r from-red-500/20 to-red-600/20 p-3 rounded-lg border border-red-500/20 group-hover:border-red-500/40 transition-all duration-500">
                          {value.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Impact
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Numbers that speak to our commitment to security excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="group relative">
                  {/* Glassmorphism card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Animated counter with glow */}
                      <div className="relative mb-3">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                          <CountUp end={stat.value} duration={3} separator="," decimals={stat.decimals || 0} />
                          {stat.suffix}
                        </h2>
                      </div>
                      
                      <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-card-bg px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Cutting-Edge <span className="text-red-500">Technology</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-black p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-red-500">{tech.name}</h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <IconStar size={16} className="text-red-500" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        

        {/* Timeline Section */}
        {/* <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Journey to <span className="text-red-500">Redefining Security</span>
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-red-500/30 transform -translate-x-1/2"></div>
              {milestones.map((item, index) => (
                <div key={item.year} className="mb-8 flex justify-between items-center w-full">
                  <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  </div>
                  <div className="z-10 flex items-center order-2 bg-red-500 shadow-xl w-16 h-16 rounded-full">
                    <div className="mx-auto text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className={`w-5/12 px-4 py-2 ${index % 2 === 0 ? 'order-3 text-left' : 'order-1 text-right'}`}>
                    <p className="text-lg font-bold text-red-500">{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.event}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Founder Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                The Mind Behind <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">the Shield</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Meet the visionary who built NightShield from the ground up
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                {/* Main glassmorphism card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      {/* Image section */}
                      <div className="flex-shrink-0 relative">
                        {/* Image glow effect */}
                        <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        
                        {/* Image container */}
                        <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/20 p-2 rounded-xl border border-red-500/30">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-64 h-64 object-cover rounded-lg shadow-2xl"
                          />
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500"></div>
                      </div>
                      
                      {/* Content section */}
                      <div className="flex-1 space-y-6">
                        {/* Name and role */}
                        <div>
                          <h3 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {founder.name}
                          </h3>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full">
                            <IconSparkles size={16} className="text-red-400" />
                            <span className="text-red-400 font-semibold">{founder.role}</span>
                          </div>
                        </div>
                        
                        {/* Bio content */}
                        <div className="space-y-4">
                          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {founder.bio}
                          </div>
                          
                          {/* Signature line */}
                          <div className="pt-3 border-t border-white/10">
                            <p className="text-gray-400 italic text-sm">
                              "Building security solutions that actually work, not just look good."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Transform</span> Your Security?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Join hundreds of venues worldwide that have already upgraded their security with NightShield. 
                Let's discuss how we can protect what matters most to you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }} className="group relative px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <IconBolt size={18} />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }} className="group relative px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="relative z-10 flex items-center gap-2">
                    <IconShield size={18} />
                    Schedule Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
