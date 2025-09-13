'use client';

import React from 'react';
import { IconShieldLock, IconTrendingUp, IconUsers, IconEye, IconRocket, IconBuildingArch, IconBrain, IconAward, IconHeart, IconTarget, IconCheck, IconStar, IconGlobe, IconShieldCheck, IconSparkles, IconBolt, IconShield } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Contact from '@/components/NightShield/Contact'


// Custom CountUp component
const CountUp = ({ end, duration = 2000, suffix = "", decimals = 0 }: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isVisible, end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

const AboutPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null)

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
    { 
      value: 47, 
      label: 'Incidents Prevented', 
      suffix: ' this month',
      description: 'Real-time threat detection and prevention',
      icon: <IconShield size={24} className="text-red-500" />
    },
    { 
      value: 2.3, 
      label: 'Average Response Time', 
      suffix: ' seconds',
      description: 'From detection to alert notification',
      icon: <IconBolt size={24} className="text-red-500" />
    },
    { 
      value: 98.7, 
      label: 'System Uptime', 
      suffix: '% this quarter',
      description: 'Reliable 24/7 monitoring',
      icon: <IconTrendingUp size={24} className="text-red-500" />
    },
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

  const generalFAQs = [
    {
      question: "What is NightShield AI?",
      answer: "Real-time AI for venues that turns your existing CCTV into a live incident detector—spotting fights and falls and alerting staff within seconds."
    },
    {
      question: "Do I need new cameras?",
      answer: "No. If your system supports RTSP/ONVIF (most IP/NVR setups do), you're good. We'll confirm compatibility during onboarding."
    },
    {
      question: "How fast are alerts?",
      answer: "Typically under 10 seconds from detection to notification, depending on camera settings and network."
    },
    {
      question: "Will it work in nightclub lighting?",
      answer: "Yes—our models are tuned for low-light venues. We also let you adjust sensitivity to reduce false positives."
    },
    {
      question: "What do staff receive?",
      answer: "A clear alert with incident type, camera/location, timestamp, and a short clip in the dashboard."
    },
    {
      question: "Is NightShield GDPR compliant?",
      answer: "Yes. We store only short, event-based clips, encrypt data, host in the UK/EU, and auto-delete per your policy."
    },
    {
      question: "How long does setup take?",
      answer: "Most pilots are live in 60–120 minutes once we have access to your streams."
    },
    {
      question: "How much does it cost?",
      answer: "Simple monthly pricing by number of camera streams. Pilots and multi-site discounts available. See Pricing."
    }
  ];

  const pricingFAQs = [
    {
      question: "How do you price NightShield?",
      answer: "By active camera streams and features. No long contracts required; annual discounts available."
    },
    {
      question: "Do you offer a pilot or free trial?",
      answer: "Yes—time-boxed pilots (e.g., 14–30 days) with success criteria, reduced pricing, and full support."
    },
    {
      question: "What's included in the fee?",
      answer: "Detection, alerts, dashboard access, updates, and standard support. Optional add-ons: on-prem edge device, premium SLA."
    },
    {
      question: "Any hidden costs?",
      answer: "No. If you choose cloud analysis, data/compute are included in your plan. SMS/voice alerts at standard pass-through rates."
    },
    {
      question: "Can you invoice our group and split by site?",
      answer: "Yes—central billing for groups with site-level reporting."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. No setup fees apply."
    },
    {
      question: "What happens if I exceed my camera limit?",
      answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional camera licenses for £50/month per camera."
    },
    {
      question: "Is there a long-term contract required?",
      answer: "No long-term contracts required. All plans are month-to-month or yearly with a 20% discount. You can cancel anytime with 30 days notice."
    },
    {
      question: "What's included in the setup service?",
      answer: "Our professional setup includes camera installation, system configuration, staff training, and a 30-day follow-up support period. All hardware is included."
    },
    {
      question: "Do you offer volume discounts for multiple venues?",
      answer: "Yes! We offer significant discounts for businesses with 3+ locations. Contact our sales team for custom enterprise pricing and volume discounts."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment and help you transition to another solution."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-12 md:py-16 md:pt-0 lg:pt-28 px-4">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon with glow effect */}
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150"></div>
                <div className="relative bg-gradient-to-r from-red-500 to-red-600 p-2 md:p-3 rounded-xl shadow-2xl">
                  <IconShield size={24} className="md:hidden text-white" />
                  <IconShield size={32} className="hidden md:block text-white" />
                </div>
              </div>
              
              {/* Main heading with gradient text */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Beyond Surveillance.
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  We Are Your Night Shield.
                </span>
              </h1>
              
              {/* Subtitle with modern styling */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-6 md:mb-8 px-2">
                In an unpredictable world, venue safety is non-negotiable. NightShield was founded by security veterans
                and AI pioneers to shift from reactive recording to proactive protection.
              </p>
              
              {/* Call to action with modern button */}
              <div className="px-2">
                <button className="px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <IconBolt size={16} className="md:hidden" />
                    <IconBolt size={18} className="hidden md:block" />
                    Discover Our Story
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
       

        {/* Values Section */}
        <section className="relative py-12 md:py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 px-2">
                Our <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Core Values</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
                The principles that drive everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div key={index} className="group relative">
                  {/* Glassmorphism card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 h-full transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Icon with glow */}
                      <div className="relative inline-block mb-3 md:mb-4">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-r from-red-500/20 to-red-600/20 p-2 md:p-3 rounded-lg border border-red-500/20 group-hover:border-red-500/40 transition-all duration-500">
                          <div className="scale-75 md:scale-100">
                            {value.icon}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
        <section id="stats-section" className="relative py-12 md:py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 px-2">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Live Security Metrics
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
                Real-time data showing our impact on venue security
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Hover over cards for details</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="group relative">
                  {/* Glassmorphism card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 text-center transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 cursor-pointer">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with animation */}
                      <div className="relative mb-3 md:mb-4 flex justify-center">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-r from-red-500/20 to-red-600/20 p-2 md:p-3 rounded-lg border border-red-500/20 group-hover:border-red-500/40 transition-all duration-500 group-hover:scale-110">
                          {stat.icon}
                        </div>
                      </div>

                      {/* Animated counter with glow */}
                      <div className="relative mb-2 md:mb-3">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                          <CountUp 
                            end={stat.value} 
                            duration={2000} 
                            suffix={stat.suffix} 
                            decimals={1} 
                          />
                        </h2>
                      </div>
                      
                      <p className="text-sm md:text-base text-gray-300 font-medium group-hover:text-white transition-colors duration-300 mb-2">
                        {stat.label}
                      </p>

                      {/* Description that appears on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {stat.description}
                        </p>
                      </div>

                      {/* Live indicator */}
                      <div className="mt-2 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-400 font-medium">Live Data</span>
                      </div>
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

        

        

        
        {/* Founder Section */}
        <section className="relative py-12 md:py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 px-2">
                The Mind Behind <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">the Shield</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
                Meet the visionary who built NightShield from the ground up
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                {/* Main glassmorphism card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                      {/* Image section */}
                      <div className="flex-shrink-0 relative">
                        {/* Image glow effect */}
                        <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        
                        {/* Image container */}
                        <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/20 p-2 rounded-xl border border-red-500/30">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover object-center rounded-lg shadow-2xl"
                          />
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute top-2 right-2 w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 shadow-lg shadow-red-600/50"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 md:w-3 md:h-3 bg-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 shadow-lg shadow-red-700/50"></div>
                      </div>
                      
                      {/* Content section */}
                      <div className="flex-1 space-y-4 md:space-y-6">
                        {/* Name and role */}
                        <div className="text-center lg:text-left">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 md:mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {founder.name}
                          </h3>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full">
                            <IconSparkles size={14} className="md:hidden text-red-400" />
                            <IconSparkles size={16} className="hidden md:block text-red-400" />
                            <span className="text-red-400 font-semibold text-sm md:text-base">{founder.role}</span>
                          </div>
                        </div>
                        
                        {/* Bio content */}
                        <div className="space-y-3 md:space-y-4">
                          <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                            {founder.bio}
                          </div>
                          
                          {/* Signature line */}
                          <div className="pt-3 border-t border-white/10">
                            <p className="text-gray-400 italic text-xs md:text-sm text-center lg:text-left">
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

        {/* FAQ Section */}
        <section className="relative py-12 md:py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
          
          <div className="container mx-auto relative z-10">
            {/* General FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 px-2">
                General <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Questions</span>
              </h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {generalFAQs.map((faq, index) => (
                  <div key={`general-${index}`} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === `general-${index}` ? null : `general-${index}`)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-red-500 transition-transform ${activeFAQ === `general-${index}` ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeFAQ === `general-${index}` && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 px-2">
                Pricing <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Questions</span>
              </h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {pricingFAQs.map((faq, index) => (
                  <div key={`pricing-${index}`} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === `pricing-${index}` ? null : `pricing-${index}`)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-red-500 transition-transform ${activeFAQ === `pricing-${index}` ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeFAQ === `pricing-${index}` && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-12 md:py-16 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 px-2">
                Ready to <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Transform</span> Your Security?
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
                Join hundreds of venues worldwide that have already upgraded their security with NightShield. 
                Let's discuss how we can protect what matters most to you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-2">
                <button onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }} className="group relative px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <IconBolt size={16} className="md:hidden" />
                    <IconBolt size={18} className="hidden md:block" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }} className="group relative px-4 py-2.5 md:px-6 md:py-3 bg-transparent border-2 border-red-500 text-red-500 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-2xl hover:shadow-red-500/25 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <IconShield size={16} className="md:hidden" />
                    <IconShield size={18} className="hidden md:block" />
                    Schedule Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <Contact compact />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
