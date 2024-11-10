const handleUpload = async () => {
  if (!file) {
    setMessage('Please select a file to upload');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('https://project-major-server-h4df0xskn-roban-singhs-projects.vercel.app/upload', formData, {
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
