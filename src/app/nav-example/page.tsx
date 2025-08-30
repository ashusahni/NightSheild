import React from 'react';
import PillNav from '@/components/NightShield/PillNav';

export default function NavExample() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">PillNav Component Example</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Navigation Bar</h2>
          
          <PillNav
            logo="/images/logo/LOGO TRANSPARENT.png"
            logoAlt="NightShield Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Usage Code</h2>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
{`import PillNav from './PillNav';
import logo from '/path/to/logo.svg';

<PillNav
  logo={logo}
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>`}
          </pre>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Props Documentation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-600">Required Props:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li><code className="bg-gray-200 px-2 py-1 rounded">logo</code> - Path to logo image</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">items</code> - Array of navigation items</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Optional Props:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li><code className="bg-gray-200 px-2 py-1 rounded">logoAlt</code> - Alt text for logo (default: "Logo")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">activeHref</code> - Currently active page</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">className</code> - Additional CSS classes</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">ease</code> - GSAP easing function (default: "power3.easeOut")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">baseColor</code> - Base color for navigation (default: "#fff")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">pillColor</code> - Pill background color (default: "#060010")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">hoveredPillTextColor</code> - Text color on hover (default: "#060010")</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">pillTextColor</code> - Default pill text color</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">onMobileMenuClick</code> - Callback for mobile menu</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">initialLoadAnimation</code> - Enable initial animation (default: true)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
