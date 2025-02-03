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
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">BirthSync</h1>
          <p className="text-gray-300">
            Convert your Google Contacts birthdays into a calendar you can import anywhere
          </p>
        </header>

        <main>
          <FileUpload onFileParsed={setContacts} />

          {contacts.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Found {contacts.length} birthdays
                </h2>
                <ICSDownload contacts={contacts} />
              </div>
              <BirthdayTable contacts={contacts} />
            </div>
          )}

          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App; 