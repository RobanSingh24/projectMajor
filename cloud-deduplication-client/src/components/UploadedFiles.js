const fetchUploadedFiles = async () => {
  try {
    const response = await axios.get('https://project-major-server-h4df0xskn-roban-singhs-projects.vercel.app/uploaded-files');
    setFiles(response.data); // Assuming response.data is an array of files
  } catch (error) {
    console.error('Error fetching uploaded files:', error);
  }
};
