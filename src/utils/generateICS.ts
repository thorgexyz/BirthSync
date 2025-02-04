import { Contact } from './parseCSV';

function formatDate(dateStr: string): string {
  // For --MM-DD format, we'll use a placeholder year
  if (dateStr.startsWith('--')) {
    return '2000' + dateStr.substring(2).replace(/-/g, '');
  }
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
    let dtend;
    
    if (contact.birthday.startsWith('--')) {
      // For --MM-DD format, manually calculate the next day
      const [month, day] = contact.birthday.substring(2).split('-').map(Number);
      const date = new Date(2000, month - 1, day + 1);  // Month is 0-based in JS
      dtend = date.toISOString().slice(0, 10).replace(/-/g, '');
    } else {
      const dateObj = new Date(contact.birthday);
      dateObj.setDate(dateObj.getDate() + 1);
      dtend = formatDate(dateObj.toISOString().slice(0, 10));
    }

    return [
      'BEGIN:VEVENT',
      `UID:${contact.name}-${dtstart}@birthsync.app`,
      `SUMMARY:${contact.name}'s Birthday`,
      `DESCRIPTION:Original birthday format: ${contact.birthday} (YYYY-MM-DD)`,
      `DTSTART;VALUE=DATE:${dtstart}`,
      `DTEND;VALUE=DATE:${dtend}`,
      'RRULE:FREQ=YEARLY',
      'END:VEVENT',
    ].join('\r\n');
  });

  return [...header, ...events, ...footer].join('\r\n');
} 