import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Who we are</h2>
            <p className="text-white/80">
              NightShield AI Ltd (UK) (&quot;NightShield&quot;, &quot;we&quot;, &quot;us&quot;).
              For any privacy-related inquiries, please contact us at{' '}
              <a href="mailto:legal@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                legal@nightshield.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-white/80">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Contact information (name, email, company)</li>
                <li>Account information when you register</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <div className="space-y-4">
              <p className="text-white/80">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Provide and maintain our services</li>
                <li>Process your requests and respond to your inquiries</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate about products, services, and events</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
            <p className="text-white/80">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. For more details about our security measures, please visit our{' '}
              <a href="/security" className="text-red-500 hover:text-red-400 hover:underline">Security page</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cookies and Tracking</h2>
            <p className="text-white/80">
              We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about our use of cookies, please see our{' '}
              <a href="/cookies" className="text-red-500 hover:text-red-400 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <p className="text-white/80">
              We may use third-party services to process your data. A list of our subprocessors is available at{' '}
              <a href="/subprocessors" className="text-red-500 hover:text-red-400 hover:underline">/subprocessors</a>. 
              These services are carefully selected and required to maintain appropriate security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
            <div className="space-y-4">
              <p className="text-white/80">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-white/80">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-white/80">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:legal@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                legal@nightshield.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
