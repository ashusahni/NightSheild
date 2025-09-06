import React from 'react';

const AccessibilityPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Accessibility Statement</h1>
      
      <p className="text-sm text-white/60 mb-8">
        Last updated: March 19, 2024
      </p>

      <div className="bg-white/5 border border-red-500/20 rounded-lg p-6 mb-8 backdrop-blur-sm">
        <p className="text-lg text-white">
          NightShield aims to conform to <strong className="text-red-500">WCAG 2.2 AA</strong> for public web pages and the dashboard.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">What we're doing</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-white/80">
            Semantic HTML and ARIA where needed.
          </li>
          <li className="text-white/80">
            Keyboard-navigable components and visible focus states.
          </li>
          <li className="text-white/80">
            Colour contrast meeting AA.
          </li>
          <li className="text-white/80">
            Alt text for informative imagery; decorative images marked accordingly.
          </li>
          <li className="text-white/80">
            Forms with labels, error summaries, and ARIA live regions for async updates.
          </li>
          <li className="text-white/80">
            Avoid auto-playing motion; respect reduced-motion preferences.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Limitations</h2>
        <p className="text-white/80">
          Certain CCTV/clip review UI elements may require mouse/gesture. We're iterating to improve keyboard 
          access and captions for clips.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Feedback / request an alternative format</h2>
        <p className="text-white/80">
          Email{' '}
          <a 
            href="mailto:accessibility@nightshield.ai" 
            className="text-red-500 hover:text-red-400 hover:underline transition-colors duration-200"
          >
            accessibility@nightshield.ai
          </a>
          . We aim to respond within 5 working days.
        </p>
      </section>

      {/* Additional helpful information */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-3 text-white">Need Immediate Assistance?</h3>
        <p className="text-white/80">
          If you're experiencing any difficulties accessing our content or services, please don't hesitate to reach out. 
          We're committed to making our platform accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default AccessibilityPage;
