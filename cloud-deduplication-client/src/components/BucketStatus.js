const fetchBucketStatus = async () => {
  try {
    const response = await axios.get('https://project-major-server-pbalyef33-roban-singhs-projects.vercel.app/bucket-status');
    setStatus(response.data.status);
  } catch (error) {
    console.error('Error fetching bucket status:', error);
    setStatus('Unable to fetch bucket status');
  }
};
