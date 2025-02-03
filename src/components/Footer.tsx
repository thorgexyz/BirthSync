import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-8 py-4 border-t border-gray-200">
    <div className="text-center text-sm text-gray-600">
      <p>Created by{' '}
        <a 
          href="https://thorge.xyz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          Thorge.xyz
        </a>
      </p>
      <p className="mt-1">
        Made with privacy in mind - your data never leaves your browser
      </p>
    </div>
  </footer>
);

export default Footer; 