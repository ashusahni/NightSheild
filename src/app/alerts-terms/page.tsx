import React from 'react';

const AlertsTermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
      <h1 className="text-4xl font-bold mb-8">NightShield Operational Alerts (SMS / Email / Push) – Terms</h1>
      
      <p className="text-sm text-gray-600 mb-8">
        Last updated: March 19, 2024
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <p className="font-semibold">Summary:</p>
        <p>
          We send operational safety alerts (e.g., "incident detected," "camera offline") to staff your venue admin has authorised. 
          Message frequency varies with incident volume. Carrier rates may apply.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who receives alerts</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Only users added by your venue admin (numbers/emails provided by your organisation).</li>
          <li>You must be 16+ and permitted by your employer to receive operational messages.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Consent & lawful basis</h2>
        <p>
          Your organisation (the Data Controller) designates recipients. NightShield (the Processor) delivers alerts under 
          your venue's contract (legitimate interests / performance of contract). See{' '}
          <a href="/dpa" className="text-blue-600 hover:underline">DPA</a> and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequency</h2>
        <p>
          Variable. Depends on configured cameras, sensitivity and venue traffic. You can tune thresholds and cool-downs 
          in the dashboard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Charges</h2>
        <p>
          NightShield doesn't surcharge. Standard carrier/SMS/data rates may apply.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Opt-out / Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>SMS:</strong> Reply <strong>STOP</strong> to end. Reply <strong>HELP</strong> for help.</li>
          <li><strong>Email:</strong> Use the "unsubscribe" link or ask your admin.</li>
          <li><strong>Push:</strong> Disable in app settings or ask your admin.</li>
          <li>You may still receive critical service messages (e.g., password reset, account security).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data we process for alerts</h2>
        <p>
          Phone numbers, email addresses, device tokens; alert metadata (time, camera label, incident type, confidence). 
          Short clips if configured. See retention in{' '}
          <a href="/data-retention" className="text-blue-600 hover:underline">Data Retention</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your responsibilities</h2>
        <p>
          Keep your contact details current. Don't share alert content outside authorised staff. Treat incident clips 
          as confidential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Abuse / misdirected messages</h2>
        <p>
          If you received an alert in error, email{' '}
          <a href="mailto:abuse@nightshield.ai" className="text-blue-600 hover:underline">abuse@nightshield.ai</a> and 
          we'll remove you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="list-none space-y-2">
          <li>
            Support:{' '}
            <a href="mailto:support@nightshield.ai" className="text-blue-600 hover:underline">support@nightshield.ai</a>
          </li>
          <li>
            Privacy:{' '}
            <a href="mailto:privacy@nightshield.ai" className="text-blue-600 hover:underline">privacy@nightshield.ai</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AlertsTermsPage;
