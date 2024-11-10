import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UploadedFiles.css';

const UploadedFiles = () => {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        const response = await axios.get('https://project-major-server-pbalyef33-roban-singhs-projects.vercel.app/uploaded-files'); // Update with your backend URL
        setFiles(response.data); // Assuming response.data is an array of files
      } catch (error) {
        console.error('Error fetching uploaded files:', error);
      }
    };

    fetchUploadedFiles();
  }, []);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="uploaded-files">
      <h2>Uploaded Files</h2>
      <input
        type="text"
        placeholder="Search files..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => (
            <li key={file.name}>
              <a href={`https://${process.env.REACT_APP_AWS_BUCKET_NAME}.s3.${process.env.REACT_APP.AWS_REGION}.amazonaws.com/${file.name}`} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a> - {file.size} bytes
            </li>
          ))
        ) : (
          <p>No files found</p>
        )}
      </ul>
    </div>
  );
};

export default UploadedFiles;
