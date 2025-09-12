import React from 'react';

const AUPPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Acceptable Use Policy (AUP)</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-white/80 mb-8">
          This AUP applies to your use of NightShield&apos;s services and any submission of data, 
          including camera streams, clips, alerts, dashboards, and APIs. It supplements the{' '}
          <a href="/msa" className="text-red-500 hover:text-red-400 hover:underline">MSA</a>{' '}
          and your Order Form/Pilot.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1) Lawful use only</h2>
          <p className="text-white/90">
            You will not use the service to violate law, including: unlawful surveillance; 
            unlawful discrimination; harassment; stalking; threatening behaviour; incitement; 
            or infringement of privacy, IP, or publicity rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2) Camera streams & content</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>You are responsible for the <strong>lawful sourcing</strong> of camera feeds and any 
                required signage/consents at your premises (e.g., CCTV notices for staff/guests).</li>
            <li>Do not stream areas where a reasonable expectation of privacy exists 
                (toilets, changing rooms, staff rooms, etc.).</li>
            <li>Configure retention in line with your policies and our{' '}
                <a href="/dpa" className="text-red-500 hover:text-red-400 hover:underline">DPA</a>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3) Prohibited technical behaviour</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>No unauthorised access, scanning, probing, or load testing of NightShield infrastructure.</li>
            <li>No malware, bots, scraping, or attempts to bypass service limits, clip retention, or authentication.</li>
            <li>Do not use the service to build competing datasets or models without written consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4) Fair usage</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>Respect plan limits (streams, recipients, alert throughput).</li>
            <li>Keep stream <strong>resolution/fps</strong> within plan terms to manage compute cost/latency. 
                (Your site may note recommended ingest ≤1080p and ≤15fps, with internal down-scaling/tuning.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5) Safety & abuse reporting</h2>
          <p className="text-white/80">
            Report suspected security issues to{' '}
            <a href="mailto:security@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
              security@nightshield.ai
            </a>. 
            We operate a responsible disclosure process (see{' '}
            <a href="/security" className="text-red-500 hover:text-red-400 hover:underline">/security</a>).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6) Our enforcement</h2>
          <p className="text-white/80">
            We may suspend or restrict accounts that breach this AUP, the MSA, or applicable law. 
            We&apos;ll make reasonable efforts to notify you unless legally restricted.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AUPPage;
