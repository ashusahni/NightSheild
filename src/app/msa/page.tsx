/** @jsxImportSource react */
import React from 'react';

const MSAPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Master Service Agreement (MSA)</h1>
          <div className="text-white/60 space-y-1">
            <p>Version: 1.0</p>
            <p>Governing law: England & Wales</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1) Definitions</h2>
            <div className="space-y-3 text-white/80">
              <p><strong>"Customer":</strong> The venue or company named on the Order Form.</p>
              <p><strong>"Services":</strong> NightShield's hosted incident-detection platform, APIs, dashboards, alerts and related support.</p>
              <p><strong>"Clips":</strong> Short video segments and metadata generated from Customer's CCTV feeds.</p>
              <p><strong>"Order Form":</strong> A signed order referencing this MSA.</p>
              <p><strong>"DPA":</strong> NightShield Data Processing Addendum at <a href="https://nightshield.ai/dpa" className="text-red-500 hover:text-red-400 hover:underline">https://nightshield.ai/dpa</a> (as updated per DPA change process).</p>
              <p><strong>"Sub-processor List":</strong> <a href="https://nightshield.ai/subprocessors" className="text-red-500 hover:text-red-400 hover:underline">https://nightshield.ai/subprocessors</a></p>
              <p><strong>"SLA":</strong> Service Level terms in Schedule 1.</p>
              <p><strong>"Fair Use Limits":</strong> Limits stated on the Order Form (streams, max resolution, max FPS, retention, recipients).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2) Services; Scope</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>2.1</strong> NightShield provides real-time incident detection on IP camera streams (e.g., RTSP/ONVIF), plus an admin dashboard and alerting.</p>
              <p><strong>2.2</strong> <strong>Not life-safety:</strong> Services assist staff; they do not replace human judgement or emergency services.</p>
              <p><strong>2.3</strong> <strong>Compatibility:</strong> Customer provides working IP camera streams and connectivity. NightShield may downscale or sample frames for performance.</p>
              <p><strong>2.4</strong> <strong>Fair Use:</strong> NightShield may throttle, prompt a plan change, or charge overages (see Order Form) if sustained usage exceeds Fair Use Limits.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3) Customer Responsibilities</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>3.1</strong> <strong>Lawful CCTV:</strong> Customer is the Controller and must ensure a lawful basis, signage, and internal policies for CCTV and Clips.</p>
              <p><strong>3.2</strong> <strong>Access:</strong> Provide stream URLs, NVR details, and staff contact points; keep credentials current.</p>
              <p><strong>3.3</strong> <strong>Environment:</strong> Maintain adequate bandwidth, power, and networking.</p>
              <p><strong>3.4</strong> <strong>Recipients:</strong> Manage who receives alerts; remove leavers promptly.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4) Fees & Payment</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>4.1</strong> Fees are set out in the Order Form; billed monthly in advance, NET 14 days; prices exclude VAT.</p>
              <p><strong>4.2</strong> <strong>Overages & Plan Changes:</strong> If sustained overage &gt; 5 consecutive days, NightShield may (i) throttle, (ii) charge overages, or (iii) move Customer to a higher plan on notice (see Order Form rate card).</p>
              <p><strong>4.3</strong> Late amounts may accrue interest at 4% above BoE base rate; NightShield may suspend for non-payment after notice.</p>
              <p><strong>4.4</strong> <strong>Auto-renew & price changes:</strong> Annual auto-renew. Price changes effective on renewal with 30 days' notice, capped at CPI + 5% unless Customer changes plan.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5) Term; Termination</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>5.1</strong> The MSA starts on the Effective Date and continues until all Orders terminate.</p>
              <p><strong>5.2</strong> Either party may terminate an Order and/or this MSA for uncured material breach (30 days' notice).</p>
              <p><strong>5.3</strong> Customer may terminate an Order Form at the end of any term period with 30 days' written notice before renewal.</p>
              <p><strong>5.4</strong> <strong>On termination:</strong> access stops; NightShield deletes Clips per DPA and Order Form retention.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6) Suspension</h2>
            <p className="text-white/80">
              NightShield may suspend for security, legal, non-payment, or abusive usage. Unless urgent, NightShield will try to give 24 hours' notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7) SLA</h2>
            <p className="text-white/80">
              SLA credits apply only to paid subscriptions (not pilots). See Schedule 1.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8) Data Protection</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>8.1</strong> <strong>Roles:</strong> Customer (Controller), NightShield (Processor).</p>
              <p><strong>8.2</strong> Processing is governed by the DPA at <a href="https://nightshield.ai/dpa" className="text-red-500 hover:text-red-400 hover:underline">https://nightshield.ai/dpa</a>, incorporated by reference.</p>
              <p><strong>8.3</strong> <strong>Sub-processors:</strong> listed at <a href="/subprocessors" className="text-red-500 hover:text-red-400 hover:underline">/subprocessors</a>; NightShield will give notice of changes with an objection window as set in the DPA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9) Security</h2>
            <p className="text-white/80">
              NightShield maintains appropriate technical and organisational measures (encryption in transit/at rest; access controls; logging; backups; DR). Annual external penetration test with executive summary available under NDA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10) Confidentiality</h2>
            <p className="text-white/80">
              Each party must keep the other's Confidential Information secret and use it only to perform under this MSA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11) IP; Training Rights</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>11.1</strong> <strong>Ownership:</strong> Customer owns Customer Data and Clips. NightShield owns the Services, models, and improvements.</p>
              <p><strong>11.2</strong> <strong>Licence to Provide Services:</strong> Customer grants NightShield a licence to process Clips and metadata solely to deliver the Services and support.</p>
              <p><strong>11.3</strong> <strong>Model Improvement (Optional):</strong> If not opted-out on the Order Form, Customer grants NightShield a perpetual, non-exclusive licence to use de-identified Clips and derived features to improve models. If opted-out, NightShield will not use Clips for training beyond Customer's instance.</p>
              <p><strong>11.4</strong> NightShield warrants its models and training data are lawfully sourced/licensed.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12) Warranties & Disclaimers</h2>
            <p className="text-white/80">
              NightShield will provide the Services with reasonable skill and care. EXCEPT AS STATED, THE SERVICES ARE PROVIDED "AS IS". NightShield disclaims implied warranties and does not guarantee zero false positives/negatives, or that all incidents will be detected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13) Indemnities</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>13.1</strong> <strong>By NightShield:</strong> NightShield will defend and indemnify Customer against third-party claims alleging the Services infringe UK IP rights, excluding claims arising from Customer data, instructions, or non-standard use.</p>
              <p><strong>13.2</strong> <strong>By Customer:</strong> Customer will defend and indemnify NightShield against claims arising from Customer's unlawful CCTV use, lack of signage/lawful basis, or breach of this MSA.</p>
              <p><strong>13.3</strong> For IP claims, NightShield may modify, replace, or refund pre-paid fees for the affected Service.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">14) Liability</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>14.1</strong> <strong>Cap:</strong> For subscriptions, each party's total liability is capped at the greater of (a) fees paid or payable by Customer in the 12 months prior to the claim; or (b) £25,000.</p>
              <p><strong>14.2</strong> <strong>Exclusions:</strong> Neither party is liable for indirect or consequential losses, loss of profits, or loss of data (except to the limited extent expressly required by the DPA).</p>
              <p><strong>14.3</strong> <strong>Carve-outs:</strong> Caps and exclusions do not apply to: (i) death/personal injury caused by negligence; (ii) fraud; (iii) wilful misconduct; (iv) IP indemnity under 13.1; (v) breach of confidentiality; or (vi) data protection breach caused by a party's failure to comply with the DPA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">15) Insurance</h2>
            <p className="text-white/80">
              NightShield maintains: Tech E&O/Cyber £1,000,000 and Public Liability £5,000,000 (or local equivalents). Evidence available on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">16) Publicity</h2>
            <p className="text-white/80">
              Use of names/logos requires prior written consent. Case studies require Customer approval (email sufficient).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">17) Force Majeure</h2>
            <p className="text-white/80">
              Neither party is liable for delays/failures due to causes beyond reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">18) Assignment</h2>
            <p className="text-white/80">
              Neither party may assign without consent (not unreasonably withheld), except to an affiliate or on a change of control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">19) Law; Jurisdiction</h2>
            <p className="text-white/80">
              This MSA is governed by the laws of England & Wales. Courts of England & Wales have exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">20) Notices</h2>
            <p className="text-white/80">
              Notices by email to the addresses on the Order Form are valid. Legal notices also require a physical address (registered office).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">21) Order of Precedence</h2>
            <p className="text-white/80">
              If there is a conflict: Order Form ➜ DPA ➜ this MSA ➜ SLA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Schedule 1 — SLA (Paid Subscriptions Only)</h2>
            <div className="space-y-4 text-white/80">
              <p><strong>Monthly Uptime Target</strong> (hosted components): 99.5%.</p>
              <p><strong>Credits:</strong> For each full 0.5% below target in a month, credit 5% of monthly subscription, capped at 20%.</p>
              <p><strong>Exclusions:</strong> (i) Planned maintenance (with ≥48h notice); (ii) factors outside NightShield's control (e.g., Customer networks/ISPs, camera/NVR issues); (iii) beta features; (iv) force majeure; (v) misuse or breach.</p>
              <p><strong>Process:</strong> Claim within 30 days of month-end. Credits apply to future invoices.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-white/80">
              If you have any questions about this Master Service Agreement, please contact us at{' '}
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

export default MSAPage;
