
import React from 'react';
import Link from 'next/link';

const CookiesPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black text-white/90 pb-16">
      {/* Header Section */}
      <div className="relative overflow-hidden pt-32 pb-12 border-b border-red-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent"></div>
        <div className="container px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 py-12">
        <div className="prose prose-invert max-w-none prose-red">
          <p className="text-lg">
            <strong>NightShield AI ("we", "us")</strong> uses cookies and similar technologies to run our site, understand usage, and (optionally) improve marketing. You control what's collected beyond strictly necessary cookies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies (and similar tech)?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies</strong> are small text files stored on your device.</li>
            <li><strong>Local/session storage</strong> and <strong>pixels</strong> are similar technologies we may use for the same purposes.</li>
            <li>Cookies can be <strong>session</strong> (deleted when you close your browser) or <strong>persistent</strong> (kept until they expire or you remove them).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How we use cookies</h2>
          <p>
            We group cookies by purpose. Only <strong>Strictly Necessary</strong> are on by default. You can change the others anytime via <strong>Manage Cookie Settings</strong> in our footer.
          </p>

          <ol className="list-decimal pl-6 space-y-4 mt-4">
            <li>
              <strong>Strictly Necessary</strong> (always on)
              <p className="text-white/60">Needed for core site features (security, load balancing, basic preferences).</p>
            </li>
            <li>
              <strong>Functional</strong> (opt-in)
              <p className="text-white/60">Remember choices (e.g., preferred region), enhance usability.</p>
            </li>
            <li>
              <strong>Analytics</strong> (opt-in)
              <p className="text-white/60">Understand how visitors use our site to improve it (aggregate, non-identifying reports).</p>
            </li>
            <li>
              <strong>Performance/Monitoring</strong> (opt-in)
              <p className="text-white/60">Measure uptime, error rates, and page performance.</p>
            </li>
            <li>
              <strong>Marketing</strong> (opt-in)
              <p className="text-white/60">Measure campaign effectiveness; we do <strong>not</strong> sell personal data.</p>
            </li>
          </ol>

          <div className="bg-red-950/20 p-6 rounded-lg mt-8 border border-red-500/20">
            <p className="italic">We do not use face recognition or biometric tracking on the website.</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent banner:</strong> On first visit (and periodically), choose which categories you accept.</li>
            <li><strong>Change your mind:</strong> Click <strong>Manage Cookie Settings</strong> in the footer to update or withdraw consent.</li>
            <li><strong>Browser controls:</strong> Block or delete cookies in your browser settings.</li>
            <li><strong>Do Not Track / Global Privacy Control:</strong> Where supported, we treat these as an opt-out for non-essential cookies.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookie details (examples)</h2>
          <p>The exact set can change as we update the site. Your consent panel reflects the current list.</p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-red-500/20">
              <thead>
                <tr className="bg-red-950/20">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Provider</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Purpose</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-500/20">
                <tr className="hover:bg-red-950/10">
                  <td className="px-4 py-3 text-sm">ns_session</td>
                  <td className="px-4 py-3 text-sm">nightshield.ai</td>
                  <td className="px-4 py-3 text-sm">Keep you logged in; route requests</td>
                  <td className="px-4 py-3 text-sm">Strictly Necessary</td>
                  <td className="px-4 py-3 text-sm">First-party cookie</td>
                  <td className="px-4 py-3 text-sm">Session</td>
                </tr>
                <tr className="hover:bg-red-950/10">
                  <td className="px-4 py-3 text-sm">ns_csrf</td>
                  <td className="px-4 py-3 text-sm">nightshield.ai</td>
                  <td className="px-4 py-3 text-sm">Security token to prevent CSRF</td>
                  <td className="px-4 py-3 text-sm">Strictly Necessary</td>
                  <td className="px-4 py-3 text-sm">First-party cookie</td>
                  <td className="px-4 py-3 text-sm">2 hours</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <p>
              See our{' '}
              <Link href="/privacy" className="text-red-500 hover:text-red-400 underline">
                Privacy Notice
              </Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
          <p>
            We may update this policy from time to time. We'll revise the "Last updated" date and, when required, re-prompt for consent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p>
            Questions about cookies or privacy?{' '}
            <a href="mailto:privacy@nightshield.ai" className="text-red-500 hover:text-red-400">
              privacy@nightshield.ai
            </a>
          </p>
          <p className="mt-2">
            Security disclosures:{' '}
            <a href="mailto:security@nightshield.ai" className="text-red-500 hover:text-red-400">
              security@nightshield.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
