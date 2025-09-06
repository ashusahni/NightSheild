import React from 'react';

const DSARPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-8">Data Subject Access Requests (DSAR) — How to Exercise Your Rights</h1>
      
      <p className="mb-6">
        <strong>Effective date:</strong> March 19, 2024<br />
        <strong>Contact:</strong> <a href="mailto:privacy@nightshield.ai" className="text-blue-600 hover:underline">privacy@nightshield.ai</a>
      </p>

      <p className="mb-8">
        Under UK GDPR, you have rights to access, rectify, erase, restrict, object, and port your personal data, and to withdraw consent.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 1: Identify the right Controller</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Website data</strong> (forms, marketing, cookies): NightShield is the <strong>Controller</strong>. 
            Submit your request to <a href="mailto:privacy@nightshield.ai" className="text-blue-600 hover:underline">privacy@nightshield.ai</a> (subject: "DSAR").
          </li>
          <li>
            <strong>Product/venue footage & incident clips:</strong> NightShield acts as a <strong>Processor</strong> on 
            behalf of the venue (your employer or the venue you visited). <strong>Contact the venue directly</strong>; 
            we will support them under our DPA (<a href="/dpa" className="text-blue-600 hover:underline">/dpa</a>).
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 2: What to include</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your full name and contact email.</li>
          <li>What you're requesting (access/erasure/etc.).</li>
          <li>Context: website enquiry; or venue name, date/time, area of the venue (if product-related).</li>
          <li>Proof of identity (we may request reasonable verification if needed).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 3: Our response time</h2>
        <p>
          We aim to respond <strong>within one month</strong> of verifying identity. Complex cases may take an 
          additional two months; we'll tell you if so.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Step 4: What you'll receive</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Website data:</strong> a summary of the personal data we hold from your website interactions 
            (forms, marketing preferences, and relevant logs), plus actions taken (e.g., correction or deletion).
          </li>
          <li>
            <strong>Product/venue data:</strong> we will inform you who the Controller is and pass your request 
            to the venue; we'll assist them under our DPA timelines.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fees</h2>
        <p>
          DSARs are free. We may charge a reasonable fee or refuse requests that are manifestly unfounded or excessive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Complaints</h2>
        <p>
          If unresolved, you can complain to the UK ICO (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ico.org.uk</a>).
        </p>
      </section>
    </div>
  );
};

export default DSARPage;
