import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import BirthdayTable from './components/BirthdayTable';
import ICSDownload from './components/ICSDownload';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Contact } from './utils/parseCSV';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center">
        <header className="text-center mb-8 w-full">
          <h1 className="text-3xl font-bold text-white mb-2">BirthSync</h1>
          <p className="text-gray-300">
            Convert your Google Contacts birthdays into a calendar you can import anywhere
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Due to recent regulatory changes, Google Calendar no longer displays contact birthdays in some regions.
            BirthSync helps you keep tracking birthdays by converting them to regular calendar events.
          </p>
        </header>

        <main className="w-full">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Step 1: Export your contacts</h2>
            <p className="text-gray-300 mb-2">
              Visit <a href="https://contacts.google.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Contacts</a> and export your contacts by selecting "Google CSV" from the export options:
            </p>
            <img src="/google-contacts-export-1.png" alt="Google Contacts export instructions" className="rounded-lg border border-gray-700 mb-6 w-2/3" />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Step 2: Convert your birthdays</h2>
            <FileUpload onFileParsed={setContacts} />
          </div>

          {contacts.length > 0 && (
            <div className="mt-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Found {contacts.length} birthdays
                </h2>
                <ICSDownload contacts={contacts} />
              </div>
              <BirthdayTable contacts={contacts} />
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Step 3: Import to Google Calendar</h2>
            <p className="text-gray-300 mb-2">
              Visit <a href="https://calendar.google.com/calendar/u/4/r/settings/export" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Calendar Import Settings</a> and import the downloaded ICS file:
            </p>
            <img src="/import-google-event-1.png" alt="Google Calendar import instructions" className="rounded-lg border border-gray-700 mb-6 w-2/3" />
          </div>

          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;