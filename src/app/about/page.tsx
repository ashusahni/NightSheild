'use client';

import React from 'react';
import { IconShieldLock, IconTrendingUp, IconUsers, IconEye, IconRocket, IconBuildingArch } from '@tabler/icons-react';
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

        {/* Impact Section */}
        <section className="py-20 bg-card-bg">
          <div className="container mx-auto px-4">
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
      </div>
    </div>
  );
};

export default AboutPage;
