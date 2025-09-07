import React from 'react';

const DPAPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Data Processing Addendum (DPA)</h1>
          <div className="text-white/60 space-y-1">
            <p>Incorporated into the MSA by reference: <a href="https://nightshield.ai/dpa" className="text-red-500 hover:text-red-400 hover:underline">https://nightshield.ai/dpa</a></p>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1) Roles & Scope</h2>
            <p className="text-white/80">
              Customer is Controller; NightShield is Processor for Clips, thumbnails, incident metadata, camera labels, and alert recipient details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2) Purpose & Nature</h2>
            <p className="text-white/80">
              Provide incident detection, alerts, dashboards, and support; monitor camera health; generate and retain short Clips per Order Form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3) Duration</h2>
            <p className="text-white/80">
              For the term of the Order and any deletion window thereafter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4) Processing Instructions</h2>
            <p className="text-white/80">
              NightShield processes Personal Data only on documented instructions (MSA, Order Form, and Customer dashboard settings).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5) Confidentiality</h2>
            <p className="text-white/80">
              NightShield ensures personnel are bound by confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6) Security (TOMs)</h2>
            <p className="text-white/80">
              Encryption in transit/at rest; access control & MFA; least-privilege; logging/monitoring; vulnerability management; backups & DR; secure development; vendor due diligence; annual external pentest (summary available under NDA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7) Sub-processors</h2>
            <p className="text-white/80">
              Listed at <a href="/subprocessors" className="text-red-500 hover:text-red-400 hover:underline">/subprocessors</a>. NightShield will notify changes and provide an objection window of 10 days. If Customer reasonably objects, the parties will discuss in good faith; if unresolved, Customer may terminate the impacted Services (pro-rata refund of unused fees).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8) International Transfers</h2>
            <p className="text-white/80">
              Where applicable, NightShield uses UK IDTA / EU SCCs and supplementary measures for third-country transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9) Assistance</h2>
            <p className="text-white/80">
              NightShield assists Customer with DPIAs, data subject requests, and regulatory enquiries within reasonable efforts and timelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10) Breach Notification</h2>
            <p className="text-white/80">
              NightShield will notify Customer without undue delay after becoming aware of a Personal Data Breach and share relevant details as known.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11) Deletion/Return</h2>
            <p className="text-white/80">
              At termination or on written request, NightShield will delete or return Personal Data. Default Clip retention per Order Form (e.g., 24–72h) unless Customer requests a longer period in writing for investigations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12) Audit</h2>
            <p className="text-white/80">
              On request, NightShield will provide security/pentest summaries and relevant policy extracts. One audit per year on 30 days' notice, during business hours, limited to controls relevant to the Services; Customer bears costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13) Training Data (Optional)</h2>
            <p className="text-white/80">
              If Customer does not tick the Opt-Out box on the Order Form, NightShield may use de-identified Clips and derived features to improve models. No attempt will be made to re-identify individuals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">14) Liability</h2>
            <p className="text-white/80">
              DPA liability is subject to the MSA's liability clause and carve-outs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
            <div className="space-y-2 text-white/80">
              <p>
                This DPA is incorporated by reference into the{' '}
                <a href="/msa" className="text-red-500 hover:text-red-400 hover:underline">Master Service Agreement (MSA)</a>.
              </p>
              <p>
                For information about our subprocessors, please visit{' '}
                <a href="/subprocessors" className="text-red-500 hover:text-red-400 hover:underline">/subprocessors</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-white/80">
              If you have any questions about this Data Processing Addendum, please contact us at{' '}
              <a href="mailto:legal@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                legal@nightshield.ai
              </a>
            </p>
            <p className="text-white/80 mt-2">
              For privacy-related inquiries, please contact{' '}
              <a href="mailto:privacy@nightshield.ai" className="text-red-500 hover:text-red-400 hover:underline">
                privacy@nightshield.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DPAPage;
