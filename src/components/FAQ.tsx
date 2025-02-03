import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const FAQ: React.FC = () => (
  <section className="mt-8">
    <h2 className="text-base font-semibold mb-4 text-white">Frequently Asked Questions</h2>
    <Accordion type="multiple">
      <AccordionItem value="security">
        <AccordionTrigger className="text-xs">Is my data secure?</AccordionTrigger>
        <AccordionContent className="text-xs">
          Yes, absolutely! All processing occurs directly in your browser. 
          Your contact data is never sent to any server or stored anywhere.
          While we do collect basic analytics to measure product usage, this never includes
          any of your contact information - the CSV file and its contents remain entirely local to your browser.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="how-it-works">
        <AccordionTrigger className="text-xs">How does it work?</AccordionTrigger>
        <AccordionContent className="text-xs">
          The app reads your Google Contacts CSV file locally, extracts birthday information,
          and generates a standard ICS calendar file that you can import into any calendar application
          (Google Calendar, Apple Calendar, Outlook, etc.).
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="csv-format">
        <AccordionTrigger className="text-xs">What format should my CSV file be in?</AccordionTrigger>
        <AccordionContent className="text-xs">
          Use the CSV file exported directly from Google Contacts. The app expects birthdays
          in the YYYY-MM-DD format and will automatically filter out any invalid dates.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);

export default FAQ;