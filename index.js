const express = require('express');
const fs = require('fs'); 
const path = require('path');

const app = express();
app.use(express.json()); 

// this is my mock "S3 Bucket" 
const BUCKET_PATH = path.join(__dirname, 'my-s3-bucket');

// "Upload" a file to my "bucket"
// this endpoint takes JSON and saves it as a text file
app.post('/upload', (req, res) => {
  if (!req.body.filename || !req.body.content) {
    return res.status(400).json({ error: 'requires "filename" and "content" in JSON body' });
  }

  const fileName = req.body.filename;
  const fileContent = req.body.content;
  const filePath = path.join(BUCKET_PATH, fileName);

  try {
    // this is the "S3 Upload" part
    fs.writeFileSync(filePath, fileContent);
    res.status(201).json({ message: `file '${fileName}' uploaded successfully!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to write file' });
  }
});

// "List" all files in my "bucket"
app.get('/files', (req, res) => {
  try {
    // this is the "S3 ListObjects" part
    const files = fs.readdirSync(BUCKET_PATH);
    res.json({ files: files });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to read bucket directory' });
  }
});

// to start the server
const port = 3000;
app.listen(port, () => {
  console.log(`mock S3 API running on http://localhost:${port}`);
  console.log(`files are being saved in: ${BUCKET_PATH}`);
});