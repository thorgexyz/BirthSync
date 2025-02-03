import React from 'react';

const FAQ: React.FC = () => (
  <section className="mt-8 p-4 bg-gray-50 rounded">
    <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-gray-900">Is my data secure?</h3>
        <p className="mt-1 text-gray-600">
          Yes, absolutely! All processing occurs directly in your browser. 
          Your contact data is never sent to any server or stored anywhere.
        </p>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">How does it work?</h3>
        <p className="mt-1 text-gray-600">
          The app reads your Google Contacts CSV file locally, extracts birthday information,
          and generates a standard ICS calendar file that you can import into any calendar application
          (Google Calendar, Apple Calendar, Outlook, etc.).
        </p>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">What format should my CSV file be in?</h3>
        <p className="mt-1 text-gray-600">
          Use the CSV file exported directly from Google Contacts. The app expects birthdays
          in the YYYY-MM-DD format and will automatically filter out any invalid dates.
        </p>
      </div>
    </div>
  </section>
);

export default FAQ; 