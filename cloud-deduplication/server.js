// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import Routes
const uploadRoute = require('./routes/upload');
const uploadedFilesRoute = require('./routes/uploadedFiles');
const bucketStatusRoute = require('./routes/bucketStatus');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/upload', uploadRoute);
app.use('/uploaded-files', uploadedFilesRoute);
app.use('/bucket-status', bucketStatusRoute);

// Root Route
app.get('/', (req, res) => {
  res.send('Cloud Deduplication Server is running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
