import { Contact } from './parseCSV';

function formatDate(dateStr: string): string {
  return dateStr.replace(/-/g, '');
}

export function generateICS(contacts: Contact[]): string {
  const header = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BirthSync//EN',
    'CALSCALE:GREGORIAN',
  ];

  const footer = ['END:VCALENDAR'];

  const events = contacts.map((contact) => {
    const dtstart = formatDate(contact.birthday);
    const dateObj = new Date(contact.birthday);
    dateObj.setDate(dateObj.getDate() + 1);
    const dtend = formatDate(dateObj.toISOString().slice(0, 10));

    return [
      'BEGIN:VEVENT',
      `UID:${contact.name}-${dtstart}@birthsync.app`,
      `SUMMARY:${contact.name}'s Birthday`,
      `DTSTART;VALUE=DATE:${dtstart}`,
      `DTEND;VALUE=DATE:${dtend}`,
      'RRULE:FREQ=YEARLY',
      'END:VEVENT',
    ].join('\r\n');
  });

  return [...header, ...events, ...footer].join('\r\n');
} 