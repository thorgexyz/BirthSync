import Papa, { ParseResult } from 'papaparse';

export interface Contact {
  name: string;
  birthday: string; // Expecting YYYY-MM-DD
}

export function parseContactsCSV(file: File): Promise<Contact[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<Record<string, string>>) => {
        try {
          const contacts: Contact[] = results.data
            .map((row) => ({
              name: row['Name'] || '',
              birthday: row['Birthday'] || '',
            }))
            .filter((contact: Contact) => isValidDate(contact.birthday));
          resolve(contacts);
        } catch (error: unknown) {
          reject(error);
        }
      },
      error: (error: Error) => reject(error),
    });
  });
}

function isValidDate(dateStr: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) return false;
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
} 