'use client';

import React from 'react';
import MermaidDiagram from '@/components/ui/MermaidDiagram';

export default function SecurityPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const dataFlowDiagram = `
flowchart LR
  A[Camera/NVR<br>RTSP/ONVIF] -->|Secure ingest| B((Ingest Gateway))
  B --> C[Detection Engine<br>private VPC]
  C -->|Event| D[(Metadata Store)]
  C -->|Short clip 10-15s| E[(Encrypted Clip Store)]
  D --> F>Alert Service]
  E --> F
  F --> G[[SMS / Push / Dashboard]]
  E -.->|Auto-delete 24-72h| H{{Retention Policy}}
  `;

  return (
    <div className="min-h-screen bg-black text-white/90">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="relative">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Compliance</h1>
          <p className="text-xl text-white/70 mb-12 border-l-4 border-red-500 pl-4">
            NightShield turns your existing CCTV into <em>real-time incident detection</em> while minimising data exposure. 
            We collect <strong>short clips only</strong>, keep them <strong>for a short time</strong>, 
            encrypt <strong>in transit and at rest</strong>, and restrict access with <strong>role-based controls</strong> and 
            <strong>audit logs</strong> hosted in <strong>UK/EU regions</strong>.
          </p>
          <p className="text-sm text-white/60 mb-16">Last updated: {currentDate}</p>

          {/* Data Flow Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Data flow (high level)</h2>
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-medium mb-4">What happens when you paste a camera stream:</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Camera / NVR (on your network)</strong>
                    <br />→ RTSP/ONVIF sub-stream (recommended ≤1080p, ≤15fps).
                  </li>
                  <li>
                    <strong>Secure ingest</strong>
                    <br />→ Stream is received over a secure channel into our private VPC.
                  </li>
                  <li>
                    <strong>Detection service</strong>
                    <br />→ Frames are analysed in real time; <strong>no face recognition</strong>; only event signals and a short <strong>10–15s clip (5–7s pre/post)</strong> are produced when thresholds are met.
                  </li>
                  <li>
                    <strong>Alert & review</strong>
                    <br />→ We deliver <strong>instant alerts</strong> (SMS/push) and show the clip + metadata (time, camera label, confidence) in your dashboard.
                  </li>
                  <li>
                    <strong>Retention & deletion</strong>
                    <br />→ Clips auto-expire by default <strong>after 24–72 hours</strong> (configurable per plan). You can place a <strong>legal hold</strong> when required.
                  </li>
                </ol>
              </div>

              {/* Mermaid Diagram */}
              <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                <h3 className="text-xl font-medium mb-4">Technical Flow Diagram</h3>
                <MermaidDiagram definition={dataFlowDiagram} className="bg-black/30 p-4 rounded" />
              </div>
            </div>
          </section>

          {/* What We Collect Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">What we collect (and what we don't)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">We collect (on event):</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Short incident clips (10–15s)</li>
                  <li>Timestamp</li>
                  <li>Camera label/location (as you named it)</li>
                  <li>Confidence score</li>
                  <li>Alert recipients</li>
                  <li>Acknowledgement state</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">We don't collect:</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Continuous video archives</li>
                  <li>Audio (unless explicitly enabled)</li>
                  <li>Payment data</li>
                  <li>End-customer PII</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-red-500/10 rounded-lg">
              <p className="text-lg">
                <strong>Controller/Processor:</strong> You are the <strong>Data Controller</strong>; 
                NightShield is your <strong>Processor</strong> under the DPA.
              </p>
            </div>
          </section>

          {/* Controls Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Controls</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Transport security</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li><strong>TLS 1.2+</strong> on all public endpoints</li>
                    <li>Private VPC peering between internal services</li>
                    <li>Support for <strong>RTSP over TLS</strong> and <strong>VPN/IP-allowlisting</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Encryption at rest</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>Customer data and clips encrypted with <strong>AES-256</strong></li>
                    <li>Encryption keys managed by <strong>cloud KMS</strong> with strict key rotation</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Access & identity</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>Role-based access control (RBAC)</li>
                    <li>Per-user access with strong passwords</li>
                    <li><strong>2FA</strong> recommended</li>
                    <li>IP allowlisting (optional)</li>
                    <li><strong>Audit logs</strong> for all actions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Privacy by design</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li><strong>Short retention by default</strong> (24–72h)</li>
                    <li>Ability to <strong>mask camera names</strong></li>
                    <li><strong>No face recognition</strong></li>
                    <li><strong>Regional hosting</strong>: UK/EU options</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Availability Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Availability & resilience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-white/70">
                  <li><strong>Uptime target:</strong> 99.5% (MVP)</li>
                  <li><strong>Monitoring:</strong> Comprehensive health checks</li>
                  <li><strong>Backups:</strong> Daily configuration/metadata snapshots</li>
                  <li><strong>Disaster recovery:</strong> Multi-AZ deployment</li>
                </ul>
              </div>
              <div className="bg-red-500/10 p-6 rounded-lg">
                <p className="text-lg mb-2">Recovery Objectives:</p>
                <ul className="space-y-2 text-white/70">
                  <li>RTO ≤ 8 hours</li>
                  <li>RPO ≤ 24 hours for control plane/metadata</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vulnerability Disclosure */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Vulnerability Disclosure</h2>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">We welcome responsible disclosure.</p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Email <strong>security@nightshield.ai</strong></li>
                <li>Don't test against live customer venues without permission</li>
                <li>Don't access, modify, or exfiltrate data you don't own</li>
                <li>We aim to acknowledge within 2 business days</li>
              </ul>
            </div>
          </section>

          {/* Compliance Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Compliance links</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/msa" className="p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors">
                <h3 className="font-medium">Master Service Agreement (MSA)</h3>
              </a>
              <a href="/dpa" className="p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors">
                <h3 className="font-medium">Data Processing Addendum (DPA)</h3>
              </a>
              <a href="/subprocessors" className="p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors">
                <h3 className="font-medium">Sub-processors</h3>
              </a>
              <a href="/privacy" className="p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors">
                <h3 className="font-medium">Privacy Notice</h3>
              </a>
              <a href="/cookies" className="p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors">
                <h3 className="font-medium">Cookie Policy</h3>
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Questions?</h2>
            <p className="text-lg text-white/70">
              Email <a href="mailto:security@nightshield.ai" className="text-red-500 hover:underline">security@nightshield.ai</a> or 
              your account team. We're happy to walk your IT/Compliance team through the architecture and controls.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
