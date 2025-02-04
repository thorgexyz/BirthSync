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
          console.log('Total rows in CSV:', results.data.length);
          
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

              const birthday = (row['Birthday'] || '').trim();
              
              // Debug log for each row
              if (!name || !birthday || !isValidDate(birthday)) {
                console.log('Filtered out row:', {
                  name,
                  birthday,
                  isNameEmpty: !name,
                  isBirthdayEmpty: !birthday,
                  isValidDate: birthday ? isValidDate(birthday) : false,
                  originalRow: row
                });
              }

              return {
                name,
                birthday
              };
            })
            .filter((contact: Contact) => {
              const isValid = contact.name.length > 0 && isValidDate(contact.birthday);
              return isValid;
            });
            
          console.log('Final contacts count:', contacts.length);
          resolve(contacts);
        } catch (error: unknown) {
          reject(error);
        }
      },
      error: (error: Error) => reject(error),
    });
  });
}

export function isValidDate(dateStr: string): boolean {
  // Handle both YYYY-MM-DD and --MM-DD formats
  const fullDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const partialDateRegex = /^--\d{2}-\d{2}$/;

  
  if (!fullDateRegex.test(dateStr) && !partialDateRegex.test(dateStr)) {
    return false;
  }



  if (partialDateRegex.test(dateStr)) {
    // For partial dates (--MM-DD), we consider them valid if MM and DD are valid
    const [month, day] = dateStr.substring(2).split('-').map(Number);
    return month >= 1 && month <= 12 && day >= 1 && day <= 31;
  }

  // For full dates (YYYY-MM-DD), validate using Date object
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
} 