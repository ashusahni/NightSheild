import React from 'react';

const DataRetentionPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Data Retention Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-white/80 mb-8">
          This Policy explains how long we keep different categories of data and how deletion works. 
          It complements our <a href="/security" className="text-red-500 hover:text-red-400 hover:underline">Security</a> page 
          and <a href="/dpa" className="text-red-500 hover:text-red-400 hover:underline">DPA</a>.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1) Product data (core service)</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Incident clips:</strong> Short clips (typically <strong>10–15s</strong> with 5–7s pre/post) 
              created on event detection. <strong>Default auto-delete</strong> after <strong>24–72 hours</strong> 
              (plan-dependent and admin-configurable). Legal hold pauses deletion for investigations.
            </li>
            <li>
              <strong>Incident metadata:</strong> Timestamps, camera label, confidence score, acknowledgement state. 
              Retained for operational logs and audit (e.g., <strong>90–180 days</strong> by default; longer under 
              Enterprise if required by contract).
            </li>
            <li>
              <strong>Camera/NVR details:</strong> Camera labels/IDs, ingest configuration. Retained while the 
              account is active and <strong>90 days</strong> after termination unless earlier deletion is requested.
            </li>
            <li>
              <strong>Audit logs:</strong> Admin actions, logins, clip views, and alert changes retained 
              <strong>90–180 days</strong> (configurable by plan) to support security and compliance.
            </li>
            <li>
              <strong>Backups/snapshots (control plane/metadata):</strong> Daily encrypted snapshots; 
              <strong>RPO ≤ 24h</strong>; snapshots auto-expire per schedule (e.g., <strong>30–90 days</strong>). 
              Short-lived clips are <strong>not</strong> backed up by default—use legal hold to preserve an incident.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2) Website data (forms & marketing)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Enquiry/demo forms:</strong> up to <strong>12 months</strong> from last interaction.</li>
            <li><strong>Marketing list:</strong> until you unsubscribe or <strong>12 months</strong> inactivity.</li>
            <li><strong>Analytics cookies:</strong> typically up to <strong>12 months</strong>.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3) Support & communications</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Email/ticket threads:</strong> retained while open + <strong>24 months</strong> for history, 
              unless deletion is requested and legally permissible.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4) Billing & contracts</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Invoices, payments, contracts (including MSA/Order Forms):</strong> retained up to 
              <strong>6 years</strong> to satisfy accounting and legal requirements.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5) Deletion & export</h2>
          <p className="text-gray-700">
            Admins can request export or early deletion via support. We&apos;ll honour Controller instructions 
            under the DPA. Deletion cascades through active stores and scheduled snapshots as quickly as practicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6) Exceptions</h2>
          <p className="text-gray-700">
            Where required by law, investigation, or litigation hold, we may preserve limited data for longer.
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-3">Linked pages:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/security', text: 'Security' },
              { href: '/dpa', text: 'DPA' },
              { href: '/msa', text: 'MSA' },
              { href: '/privacy', text: 'Privacy' },
              { href: '/cookies', text: 'Cookies' },
              { href: '/subprocessors', text: 'Subprocessors' }
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

export default DataRetentionPage;
