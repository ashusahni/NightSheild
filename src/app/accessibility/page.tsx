import React from 'react';

const AccessibilityPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
      
      <p className="text-sm text-gray-600 mb-8">
        Last updated: March 19, 2024
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <p className="text-lg">
          NightShield aims to conform to <strong>WCAG 2.2 AA</strong> for public web pages and the dashboard.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What we're doing</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-800">
            Semantic HTML and ARIA where needed.
          </li>
          <li className="text-gray-800">
            Keyboard-navigable components and visible focus states.
          </li>
          <li className="text-gray-800">
            Colour contrast meeting AA.
          </li>
          <li className="text-gray-800">
            Alt text for informative imagery; decorative images marked accordingly.
          </li>
          <li className="text-gray-800">
            Forms with labels, error summaries, and ARIA live regions for async updates.
          </li>
          <li className="text-gray-800">
            Avoid auto-playing motion; respect reduced-motion preferences.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
        <p className="text-gray-800">
          Certain CCTV/clip review UI elements may require mouse/gesture. We're iterating to improve keyboard 
          access and captions for clips.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Feedback / request an alternative format</h2>
        <p className="text-gray-800">
          Email{' '}
          <a 
            href="mailto:accessibility@nightshield.ai" 
            className="text-blue-600 hover:underline"
          >
            accessibility@nightshield.ai
          </a>
          . We aim to respond within 5 working days.
        </p>
      </section>

      {/* Additional helpful information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-900">Need Immediate Assistance?</h3>
        <p className="text-blue-800">
          If you're experiencing any difficulties accessing our content or services, please don't hesitate to reach out. 
          We're committed to making our platform accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default AccessibilityPage;
