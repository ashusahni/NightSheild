import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
            <p className="text-muted-foreground">
              NightShield AI Ltd (UK) (&quot;NightShield&quot;, &quot;we&quot;, &quot;us&quot;).
              For any privacy-related inquiries, please contact us at legal@nightshield.ai
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact information (name, email, company)</li>
                <li>Account information when you register</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and maintain our services</li>
                <li>Process your requests and respond to your inquiries</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate about products, services, and events</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. For more details about our security measures, please visit our Security page at /security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about our use of cookies, please see our Cookie Policy at /cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use third-party services to process your data. A list of our subprocessors is available at /subprocessors. These services are carefully selected and required to maintain appropriate security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at legal@nightshield.ai
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
