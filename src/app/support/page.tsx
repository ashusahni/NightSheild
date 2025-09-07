import React from 'react';

const SupportPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-8">Support & Service Levels (SLA)</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          NightShield provides timely support for onboarding, operations, and incident response. 
          This page defines channels, severity levels, and targets.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hours & Channels</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hours:</strong> Mon–Fri 09:00–18:00 UK (excl. UK public holidays)</li>
            <li><strong>After-hours:</strong> P1 only (24×7) via email subject prefix [P1]</li>
            <li><strong>Email:</strong> <a href="mailto:support@nightshield.ai" className="text-blue-600 hover:underline">support@nightshield.ai</a> (all severities)</li>
            <li><strong>Security incidents:</strong> <a href="mailto:security@nightshield.ai" className="text-blue-600 hover:underline">security@nightshield.ai</a> (see <a href="/security" className="text-blue-600 hover:underline">/security</a>)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Severity & Targets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y  divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr className="text-gray-800">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Sev</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Examples</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Ack Target</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Update Cadence</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Target Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-red-50">
                  <td className="px-4 py-3 text-sm font-semibold text-red-800">P1 Critical</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Platform-reason outage or alerting not delivering across venue(s)</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Dashboard down; clip delivery halted</td>
                  <td className="px-4 py-3 text-sm text-gray-800">1 hour (24×7)</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Every 4 hours</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Workaround ≤ 24h; full fix ASAP</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 text-sm font-semibold text-orange-800">P2 – Major</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Material degradation with viable workaround</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Elevated latency; partial clip gaps</td>
                  <td className="px-4 py-3 text-sm text-gray-800">4 business hours</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Daily</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Fix in next maintenance or hotfix</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-4 py-3 text-sm font-semibold text-yellow-800">P3 – Minor</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Non-critical bug or UX issue</td>
                  <td className="px-4 py-3 text-sm text-gray-800">UI glitch; non-blocking configuration issue</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Next business day</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Every 3 business days</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Planned release</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-3 text-sm font-semibold text-green-800">P4 – Request</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Questions, feature requests, advice</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Setup, best practices</td>
                  <td className="px-4 py-3 text-sm text-gray-800">2 business days</td>
                  <td className="px-4 py-3 text-sm text-gray-800">Weekly</td>
                  <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Maintenance</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard window:</strong> Sundays 02:00–04:00 UK (as needed)</li>
            <li><strong>Notice:</strong> ≥48h on <a href="https://status.nightshield.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">status.nightshield.ai</a> (emergency work may be shorter)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Customer Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain stable RTSP/ONVIF streams, venue network/NVR uptime, and camera power</li>
            <li>Provide staff contact(s) for alert routing and escalation</li>
            <li>Post venue privacy signage and maintain DPIA (templates provided)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exclusions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Venue LAN/NVR/camera power/failure, ISP issues, misconfigured RTSP, third-party outages</li>
            <li>False positives/negatives at thresholds chosen by customer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SLA Credits (paid plans, optional)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If monthly uptime &lt; 99.5% (platform-side), credit 10% of monthly fee on request</li>
            <li>Credits don&apos;t stack, exclude pilot, and require ticket filed within 30 days</li>
          </ul>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-3">Related pages:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/security', text: 'Security' },
              { href: '/privacy', text: 'Privacy Policy' },
              { href: '/data-retention', text: 'Data Retention' },
              { href: '/aup', text: 'Acceptable Use Policy' }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;