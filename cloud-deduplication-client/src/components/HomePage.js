// src/components/HomePage.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FileUpload from './FileUpload';
import UploadedFiles from './UploadedFiles';
import BucketStatus from './BucketStatus';
import { useAuth } from '../context/AuthContext';
import '../styles/HomePage.css';

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div className="home-page">
      <nav>
        <ul>
          <li><Link to="upload">Upload File</Link></li>
          <li><Link to="uploaded-files">Uploaded Files</Link></li>
          <li><Link to="bucket-status">Bucket Status</Link></li>
          <li><button onClick={logout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="upload" element={<FileUpload />} />
          <Route path="uploaded-files" element={<UploadedFiles />} />
          <Route path="bucket-status" element={<BucketStatus />} />
          {/* Redirect to upload if no sub-route is matched */}
          <Route path="*" element={<FileUpload />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
