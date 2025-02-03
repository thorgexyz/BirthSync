import React from 'react';
import { Contact } from '../utils/parseCSV';

interface BirthdayTableProps {
  contacts: Contact[];
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ contacts }) => (
  <div className="overflow-x-auto mt-4">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Birthday</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {contacts.map((contact, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{contact.name}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{contact.birthday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BirthdayTable; 