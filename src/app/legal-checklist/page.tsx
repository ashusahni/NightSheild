import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const LegalChecklistPage = () => {
  return (
    <div className="min-h-screen pt-24 md:pt-32 bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <Icon icon="mdi:shield" className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold">
                Night<span className="text-red-500">Shield</span>
              </span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors"
            >
              <Icon icon="mdi:arrow-left" className="text-lg" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
            Legal Checklist
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-white">
              NightShield "Secure & Legal" Master Checklist
            </h2>

            <div className="space-y-8">
              {/* Section 0 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  0) Company & Insurance (foundations)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">Incorporation & VAT</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Register LTD, set VAT status (prices "ex VAT" on contracts if applicable).</li>
                      <li>• Proof: Companies House number, VAT certificate.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Insurance</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Buy Tech E&O/Professional Indemnity, Cyber, and Public Liability.</li>
                      <li>• Proof: Policy schedules in /admin/insurance with renewal reminders.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 1 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  1) Data Protection (UK GDPR) – your minimum viable compliance
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">ICO Registration (UK)</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Register as a data controller and processor; pay the data protection fee.</li>
                      <li>• Proof: ICO payment receipt + registration number.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-green-500">✓ Public Privacy Notice (website)</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: One page covering: who you are, what you collect on the site, lawful basis, retention, rights, contacts, cookies.</li>
                      <li>• Where: /privacy (link in footer).</li>
                      <li>• Proof: Published URL + last-updated date.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Cookie Policy + Banner (site)</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Banner with Accept/Reject; only set non-essential cookies after consent.</li>
                      <li>• Where: Banner on first visit; /cookie-policy.</li>
                      <li>• Proof: Screenshot + test with a fresh browser profile.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Roles: You are Processor for venues (CCTV clips), Controller for your own site/app users.</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: State this in MSA/DPA, Privacy Notice, and security one-pager.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  2) Contract Stack (commercial clarity)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-green-500">✓ MSA (master terms) — already done</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Keep DPA referenced by URL (don't paste full text) + Subprocessors URL + Fair-Use (FPS/Resolution) clause + Notices (legal@ / support@ / billing@).</li>
                      <li>• Proof: Signed MSA; PDFs stored in /contracts.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-green-500">✓ DPA (Processor terms) — done, host at /dpa</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Include retention defaults (e.g., 24–72h), UK/EU regions, breach notice SLA, data subject request handling ("we assist the Controller"), deletion on termination.</li>
                      <li>• Proof: Published URL with version/date.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Sub-processor list — at /subprocessors</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: List AWS (UK/EU), Twilio, and any others as you add them; include change-notification policy (e.g., 30 days).</li>
                      <li>• Proof: Page live with "last updated".</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-green-500">✓ Order Form (paid) — done</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Include streams cap, FPS/Resolution caps, pricing & billing terms, start date, venue details, contacts for legal/ops/billing.</li>
                      <li>• Proof: Signed OF linked to MSA/DPA URLs.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-green-500">✓ Pilot Agreement (with Pilot Order Summary) — done</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Keep scope, success criteria, KPIs, retention, liability caps, exit to paid plan.</li>
                      <li>• Proof: Signed pilot doc; calendar reminders for mid-pilot & close.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  3) Venue-side compliance artefacts (hand-to-hand sales ammo)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">CCTV Analytics Signage (printable PDF)</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Provide an A4 poster template (no personal data fields). Text: analytics in use, short retention, Controller = Venue, Processor = NightShield, contact emails.</li>
                      <li>• Where: Give in onboarding pack and link from /security.</li>
                      <li>• Proof: PDF in /sales/enablement + sent in welcome email.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">DPIA Template (1–2 pages)</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Simple risk eval for the venue (purpose, necessity, risks, mitigations).</li>
                      <li>• Proof: Template file + sample completed version.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Security One-Pager</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Host region, encryption, retention, access control, incident reporting, subprocessors, data flow diagram.</li>
                      <li>• Where: /security.</li>
                      <li>• Proof: Live page + PDF for sales.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  4) Marketing & Comms compliance (PECR/email/SMS)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">Email & SMS rules</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: For marketing, follow PECR (consent/soft opt-in). For operational alerts (service messages), no marketing content.</li>
                      <li>• Proof: Segment lists: "Operational" vs "Marketing". Maintain suppression list.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Twilio compliance</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Support STOP/HELP keywords; brand the sender; store consent or controller instructions.</li>
                      <li>• Proof: Test STOP flow; screenshots + SOP.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  5) Security Program (what buyers expect—even at MVP)
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">Identity & Access</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• MFA everywhere (AWS, Git, Admin, dashboards), SSO if possible.</li>
                      <li>• Password manager mandated; no shared creds.</li>
                      <li>• Quarterly access reviews (revoke ex-contractors).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">Cloud (AWS)</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Regions: pin to UK/EU.</li>
                      <li>• KMS for S3/EBS/RDS; disable public S3; bucket policies enforced.</li>
                      <li>• VPC with private subnets for inference; SGs locked down.</li>
                      <li>• CloudTrail, GuardDuty, Security Hub on; log to a write-once bucket (Object Lock).</li>
                      <li>• Secrets Manager (no secrets in code).</li>
                      <li>• CloudWatch alarms for CPU/latency/error spikes; pager to on-call.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">App/Data</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Data minimisation: clips only, no full-time recording.</li>
                      <li>• Retention TTL: automatic deletion (e.g., 24–72h) + deletion on demand.</li>
                      <li>• RBAC: least privilege; all access logged (who watched what clip).</li>
                      <li>• Rate limiting & input validation on RTSP inputs; reject malformed streams.</li>
                      <li>• Secure pipelines: signed images, CI scans, dependency updates.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">Device/Endpoints</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Mac hardening: FileVault, auto-update, screensaver lock, MDM if possible.</li>
                      <li>• Phishing protection: email security rules, staff training.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">Vuln & Testing</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Monthly dependency scan; fix highs/criticals.</li>
                      <li>• Annual penetration test (post-pilot if budget tight).</li>
                      <li>• Data deletion test each month (prove TTL works).</li>
                      <li>• Backups for configs & metadata; test restore (document RPO/RTO).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-500">Incident Response</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• IR Runbook: severity levels, roles, contacts, 72-hour ICO clock for controllers, customer comms templates.</li>
                      <li>• Breach mailbox: security@nightshield.ai routed to founders + on-call.</li>
                      <li>• Post-mortem template (blameless, action items).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  6) ML/Data Governance (your competitive moat)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">Dataset register</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: For every dataset/clip: source, license, date obtained, scope of use, right to use commercially. Avoid non-commercial unless venue grants rights.</li>
                      <li>• Proof: Spreadsheet or Notion DB; exportable on request.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Model card</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Document intended use, limits (low light, occlusion), training data types, evaluation metrics, false positive strategy.</li>
                      <li>• Proof: PDF linked on /security or available on request.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Human-in-the-loop</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: "Acknowledge/Dismiss" feeds back to reduce noise; record who tuned thresholds.</li>
                      <li>• Proof: Feature live + audit trail.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Claims discipline</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: No "guarantees"; use "reduces", "assists", "real-time alerts". Align contracts/marketing.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  7) Operational SOPs (what you and venues actually do)
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">Onboarding checklist</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Steps: RTSP/ONVIF paste → health check → recipients added → test alert → retention set → signage provided → DPIA handed over → go-live email.</li>
                      <li>• Proof: Template + a filled example.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Offboarding checklist</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Steps: disable streams → export any controller-requested logs → certify deletion → revoke access → final invoice.</li>
                      <li>• Proof: Deletion certificate template.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Change management</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Log any threshold/retention changes with who/when/why.</li>
                      <li>• Proof: Change log in the app or ticket.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  8) Product UX/Docs that reduce tickets
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• In-app Health panel: camera up/down, last clip time, FPS/Res detected, suggested settings.</li>
                  <li>• Fair-Use guardrails: clear visual caps; warning if stream is 4K@60fps.</li>
                  <li>• Sensitivity & Cool-down: with presets (Low/Med/High) + custom.</li>
                  <li>• Export pack: one-click "Incident pack" (timestamped clip + hash + metadata).</li>
                  <li>• Status page: simple hosted status with incident history (even a Notion page early on).</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  9) Finance & Billing hygiene
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-amber-500">Invoices & Terms</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Clear billing cycle, proration, late fees, auto-renew, cancellation window, pilot-to-paid transition flow.</li>
                      <li>• Proof: Invoice template; clauses in Order Form.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-amber-500">Pricing guardrails</strong>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li>• Do: Tie plans to concurrent streams + FPS/Res limits; add excess-usage rates.</li>
                      <li>• Proof: Fair-Use section in MSA and FAQs.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Section 10 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  10) People & Process
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Staff NDA & Confidentiality (employees/contractors).</li>
                  <li>• Security & GDPR training (lite, quarterly refresh).</li>
                  <li>• Background checks for anyone with prod access.</li>
                  <li>• DSR (data subject rights) SOP</li>
                  <li className="ml-4">• Do: As processor, route requests to Controller; log and assist.</li>
                  <li className="ml-4">• Proof: Email template + ticket flow.</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  11) Sales enablement (closes deals faster)
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Proof pack: security one-pager, DPIA template, signage, sample incident clip (anonymised), insurance certs, ICO number.</li>
                  <li>• Demo script: 8-minute run-through with objections map.</li>
                  <li>• Compliance FAQ: GDPR, retention, regions, who's controller, subpoenas, etc.</li>
                </ul>
              </section>

              {/* Execution Plan */}
              <section className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  How to execute fast (1-week sprint plan)
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Day 1–2:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Publish /privacy, /cookie-policy, cookie banner.</li>
                      <li>• Publish /dpa, /subprocessors, /security.</li>
                      <li>• Buy insurance; start ICO registration.</li>
                      <li>• Build signage PDF, DPIA template, security one-pager.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Day 3–4:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Wire AWS security baseline (KMS, CloudTrail, GuardDuty, S3 public block, Object Lock for logs).</li>
                      <li>• Implement retention TTL & deletion job + log/audit of clip views.</li>
                      <li>• Create Onboarding/Offboarding checklists; test STOP/HELP in Twilio.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Day 5–7:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Finalise MSA references (Fair-Use clause), ensure Order Form/Pilot reference URLs.</li>
                      <li>• Drill an incident response tabletop (simulate false alert & breach).</li>
                      <li>• Prepare Sales proof pack & demo script.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Quick Inserts */}
              <section className="bg-green-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Quick inserts you may still need (copy ideas)
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong className="text-green-300">MSA – Fair Use:</strong> "Plans include up to X concurrent streams at ≤1080p and ≤15 FPS. Streams exceeding these limits may be throttled or billed at £Y/stream/month. NightShield may advise optimal downscaling to maintain accuracy and performance."
                  </li>
                  <li>
                    <strong className="text-green-300">DPA – Retention:</strong> "Processor stores alert clips for 72 hours by default unless Controller configures a shorter duration. Upon termination, Processor deletes all Personal Data within 7 days, subject to legal holds."
                  </li>
                  <li>
                    <strong className="text-green-300">Subprocessors change notice:</strong> "NightShield will post updates at /subprocessors and notify Customers at least 30 days before addition or replacement of any Subprocessor."
                  </li>
                  <li>
                    <strong className="text-green-300">Security contacts:</strong> "security@nightshield.ai for vulnerabilities or incidents. Breach notifications will be sent to the Controller's Notices email without undue delay."
                  </li>
                </ul>
              </section>

              {/* Status Summary */}
              <section className="bg-yellow-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  What you already have vs. what's missing
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-green-300">✅ Completed:</h4>
                    <p className="text-gray-300">MSA, DPA, Subprocessors, Order Form, Pilot Agreement (+ Pilot Order Summary).</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-yellow-300">▶️ Missing/likely quick wins:</h4>
                    <p className="text-gray-300">ICO registration, Site Privacy/Cookie pages & banner, /security one-pager, signage PDF, DPIA template, IR runbook, AWS security hardening checklist, Twilio STOP/HELP proof, deletion certificate template, access review cadence.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-800 rounded">
                  <p className="text-yellow-200">
                    <strong>Need help?</strong> If you want, say the word and I'll draft: Privacy Notice, Cookie Policy, Security One-Pager, Signage PDF, DPIA template, IR Runbook, and Deletion Certificate so you can paste them straight into Notion/your site.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalChecklistPage
