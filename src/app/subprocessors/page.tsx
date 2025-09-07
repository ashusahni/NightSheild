import React from 'react';

const SubprocessorsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Subprocessors</h1>
          <div className="text-white/60 space-y-1">
            <p>Last updated: 01/09/2025</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Who we are</h2>
            <p className="text-white/80">
              NightShield AI Ltd ("NightShield") acts as a data processor to venue customers (the data controllers) when we provide AI incident detection and alerting. To run the service, we use a small number of vetted third parties ("subprocessors").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Change notice</h2>
            <p className="text-white/80">
              We'll update this page before adding or replacing a subprocessor. To get notifications, email{' '}
              <a href="mailto:privacy@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                privacy@nightshield.ai
              </a>{' '}
              with the subject "Subscribe to subprocessor updates." You may object within 30 days on reasonable data-protection grounds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data we process (typical)</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Short video clips generated from your CCTV (faces may be visible)</li>
              <li>Metadata (timestamps, camera labels, incident tags)</li>
              <li>Alert recipient details (names, phone numbers, emails)</li>
              <li>Operational logs (service health; minimised/pseudonymised)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Default retention</h2>
            <p className="text-white/80">
              Clips 24–72h (customer-configurable). Logs/metrics 30–90 days. Encryption in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Current subprocessors</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-red-500/20">
                <thead>
                  <tr className="bg-red-950/20">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Vendor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Data categories</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Region(s) & storage</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">Transfer mechanism</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-white">DPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-500/20">
                  <tr className="hover:bg-red-950/10">
                    <td className="px-4 py-3 text-sm text-white/80">Amazon Web Services (AWS)</td>
                    <td className="px-4 py-3 text-sm text-white/80">Hosting & storage</td>
                    <td className="px-4 py-3 text-sm text-white/80">Run application, store incident clips/metadata</td>
                    <td className="px-4 py-3 text-sm text-white/80">Clips, metadata, logs</td>
                    <td className="px-4 py-3 text-sm text-white/80">UK/EU regions (e.g., eu-west-2/eu-west-1)</td>
                    <td className="px-4 py-3 text-sm text-white/80">N/A (processed in UK/EU regions)</td>
                    <td className="px-4 py-3 text-sm text-white/80">AWS GDPR terms</td>
                  </tr>
                  <tr className="hover:bg-red-950/10">
                    <td className="px-4 py-3 text-sm text-white/80">Twilio</td>
                    <td className="px-4 py-3 text-sm text-white/80">SMS/Push gateway</td>
                    <td className="px-4 py-3 text-sm text-white/80">Deliver incident alerts to staff devices</td>
                    <td className="px-4 py-3 text-sm text-white/80">Recipient phone numbers, alert payload (no full video)</td>
                    <td className="px-4 py-3 text-sm text-white/80">EU processing where available; global delivery</td>
                    <td className="px-4 py-3 text-sm text-white/80">SCCs/UK IDTA as needed</td>
                    <td className="px-4 py-3 text-sm text-white/80">Twilio DPA</td>
                  </tr>
                  <tr className="hover:bg-red-950/10">
                    <td className="px-4 py-3 text-sm text-white/80">Google Workspace</td>
                    <td className="px-4 py-3 text-sm text-white/80">Email/support</td>
                    <td className="px-4 py-3 text-sm text-white/80">Handle support and account emails</td>
                    <td className="px-4 py-3 text-sm text-white/80">Names, emails, ticket context</td>
                    <td className="px-4 py-3 text-sm text-white/80">EU data centres (where applicable)</td>
                    <td className="px-4 py-3 text-sm text-white/80">SCCs/UK IDTA as needed</td>
                    <td className="px-4 py-3 text-sm text-white/80">Google DPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No other subprocessors at this time. We minimise data sent to each provider (e.g., alerts carry metadata/links, not video files).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cross-border transfers</h2>
            <p className="text-white/80">
              Where processing involves transfers outside the UK/EEA, we rely on SCCs/UK IDTA and apply supplementary measures (encryption, minimisation). Storage/processing of clips/metadata defaults to UK/EU regions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Objecting to a subprocessor</h2>
            <p className="text-white/80">
              If you have reasonable grounds to object, email{' '}
              <a href="mailto:privacy@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                privacy@nightshield.ai
              </a>{' '}
              within 30 days of our notice. We'll work to provide an alternative or modify the service. If we can't, your remedies are in the{' '}
              <a href="/msa" className="text-red-500 hover:text-red-400 hover:underline">MSA</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
            <div className="space-y-2 text-white/80">
              <p>
                This subprocessor list is referenced in our{' '}
                <a href="/dpa" className="text-red-500 hover:text-red-400 hover:underline">Data Processing Addendum (DPA)</a>.
              </p>
              <p>
                For the complete legal framework, please see our{' '}
                <a href="/msa" className="text-red-500 hover:text-red-400 hover:underline">Master Service Agreement (MSA)</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-white/80">
              For questions about our subprocessors or to subscribe to updates, please contact us at{' '}
              <a href="mailto:privacy@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                privacy@nightshield.ai
              </a>
            </p>
            <p className="text-white/80 mt-2">
              For general legal inquiries, please contact{' '}
              <a href="mailto:legal@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                legal@nightshield.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubprocessorsPage;
