import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileURL, setFileURL] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://project-major-server-pbalyef33-roban-singhs-projects.vercel.app/upload', formData, { // Update URL to your backend
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setFileURL(response.data.location);
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(error.response?.data?.message || 'Error uploading file');
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
      {fileURL && (
        <p>
          File URL: <a href={fileURL} target="_blank" rel="noopener noreferrer">{fileURL}</a>
        </p>
      )}
    </div>
  );
};

export default FileUpload;
