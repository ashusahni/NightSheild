'use client';

import React from 'react';
import { IconShieldLock, IconTrendingUp, IconUsers, IconEye, IconRocket, IconBuildingArch, IconBrain, IconAward, IconHeart, IconTarget, IconCheck, IconStar, IconGlobe, IconShieldCheck } from '@tabler/icons-react';
import CountUp from 'react-countup';

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'Security veteran with 15+ years in venue protection and AI research.',
      avatar: '👨‍💼',
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'CTO',
      bio: 'PhD in Computer Vision from MIT, formerly at Google AI.',
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Security',
      bio: '20+ years in law enforcement, specializing in crowd control and threat assessment.',
      avatar: '👨‍💼',
    },
    {
      name: 'Emily Chen',
      role: 'VP of Operations',
      bio: 'Hospitality industry expert with a deep understanding of venue security challenges.',
      avatar: '👩‍💼',
    },
  ];

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
        <section className="text-center py-20 px-4">
          <div className="container mx-auto">
            <IconShieldLock size={64} className="mx-auto text-red-500 mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Beyond Surveillance.
              <br />
              We Are Your <span className="text-red-500">Night Shield</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              In an unpredictable world, venue safety is non-negotiable. NightShield was founded by security veterans
              and AI pioneers to shift from reactive recording to proactive protection. We don&apos;t just watch. We
              anticipate, alert, and empower you to act before threats escalate.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
       

        {/* Values Section */}
        <section className="py-20 bg-card-bg px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-red-500">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h2 className="text-5xl font-bold text-red-500">
                    <CountUp end={stat.value} duration={3} separator="," decimals={stat.decimals || 0} />
                    {stat.suffix}
                  </h2>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
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
        <section className="py-20 px-4">
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
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-card-bg px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Minds Behind <span className="text-red-500">the Shield</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-black p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-500 mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-red-500">Transform</span> Your Security?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join hundreds of venues worldwide that have already upgraded their security with NightShield. 
              Let's discuss how we can protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started Today
              </button>
              <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
