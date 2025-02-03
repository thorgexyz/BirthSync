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
            .map((row) => {
              // Try different name field combinations
              const name = [
                // Organization name
                row['Organization Name'] || '',
                // Full name
                row['First Name'] && row['Last Name']
                  ? `${row['First Name']} ${row['Last Name']}`
                  : '',
                // Just first name
                row['First Name'] || '',
                // Just last name
                row['Last Name'] || '',
              ].find(n => n.length > 0) || ''; // Take first non-empty name

              return {
                name,
                birthday: row['Birthday'] || '',
              };
            })
            .filter((contact: Contact) => 
              contact.name.length > 0 && isValidDate(contact.birthday)
            );
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