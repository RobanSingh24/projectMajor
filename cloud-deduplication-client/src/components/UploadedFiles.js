const fetchUploadedFiles = async () => {
  try {
    const response = await axios.get('https://project-major-server-pbalyef33-roban-singhs-projects.vercel.app/uploaded-files');
    setFiles(response.data); // Assuming response.data is an array of files
  } catch (error) {
    console.error('Error fetching uploaded files:', error);
  }
};
