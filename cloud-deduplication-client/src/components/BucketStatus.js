import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/BucketStatus.css';

const BucketStatus = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchBucketStatus = async () => {
      try {
        const response = await axios.get('https://project-major-server-pbalyef33-roban-singhs-projects.vercel.app/bucket-status'); // Update with your backend URL
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching bucket status:', error);
        setStatus('Unable to fetch bucket status');
      }
    };

    fetchBucketStatus();
  }, []);

  return (
    <div className="bucket-status">
      <h2>Bucket Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default BucketStatus;

