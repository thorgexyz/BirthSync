import React from 'react';
import { Contact } from '../utils/parseCSV';
import { generateICS } from '../utils/generateICS';

interface ICSDownloadProps {
  contacts: Contact[];
}

const ICSDownload: React.FC<ICSDownloadProps> = ({ contacts }) => {
  const handleDownload = () => {
    if (contacts.length === 0) return;
    const icsContent = generateICS(contacts);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'birthdays.ics';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={contacts.length === 0}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Download ICS File
    </button>
  );
};

export default ICSDownload; 