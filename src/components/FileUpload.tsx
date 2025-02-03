import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Contact, parseContactsCSV } from '../utils/parseCSV';

interface FileUploadProps {
  onFileParsed: (contacts: Contact[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileParsed }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];
    parseContactsCSV(file)
      .then(onFileParsed)
      .catch((err) => console.error('CSV Parsing Error:', err));
  }, [onFileParsed]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {
      'text/csv': ['.csv']
    }
  });

  return (
    <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center cursor-pointer hover:border-gray-400 transition-colors">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the CSV file here...</p>
      ) : (
        <p className="text-gray-600">Drag and drop your Google Contacts CSV file, or click to select one.</p>
      )}
    </div>
  );
};

export default FileUpload; 