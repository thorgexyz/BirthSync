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
          The app is completely open source and you can verify this yourself by checking the code at{' '}
          <a href="https://github.com/thorgexyz/BirthSync" className="underline" target="_blank" rel="noopener noreferrer">
            github.com/thorgexyz/BirthSync
          </a>.
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

      <AccordionItem value="contact">
        <AccordionTrigger className="text-xs">I have a question or found a bug. How can I get help?</AccordionTrigger>
        <AccordionContent className="text-xs">
          If you have any questions or encounter any issues, please feel free to contact me at thorge.lindner@gmail.com. 
          I'll be happy to help!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);

export default FAQ;