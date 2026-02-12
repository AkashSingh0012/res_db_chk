import express from 'express';
import cors from 'cors';
import multer from 'multer';


import { getRegistrationById,
   abstractExists,
   insertAbstract }
   from "./database.js";

   const error_log = [];
   const app = express();
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(express.static('public'));

   const store = multer.memoryStorage();
   const upload = multer({ storage: store, limits: { fileSize: 2 * 1024 * 1024 } ,
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['application/pdf',
         'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
         if (!allowedTypes.includes(file.mimetype)) {
          return cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
         }
          cb(null, true);
        }
      });

app.post('/submit-abstract', upload.single('abstract_file'), async (req, res) => {
  try {
    const{
     registration_id,
      salutation,
      first_name,
      last_name,
      designation,
      abstract_title,
      abstract_category,
      keywords
    } = req.body;
    const file = req.file;
    if (!registration_id){
      return res.status(400).json({ error: "Missing required fields" });
      error_log.push({ error: "Missing required fields", timestamp: new Date() });
    }
    const reg = await getRegistrationById(registration_id);
    if (!reg) {
      return res.status(404).json({ error: "Registration ID not found" });
      error_log.push({ error: "Registration ID not found", timestamp: new Date() });
    }
    if(!reg.salutation
      || reg.first_name.toUpperCase().trim() !== first_name.toUpperCase().trim()
      || reg.last_name.toUpperCase().trim() !== last_name.toUpperCase().trim()){
        return res.status(400).json({ error: "Name does not match registration" });
        error_log.push({ error: "Name does not match registration", timestamp: new Date() });
      }
    if (await abstractExists(registration_id)) {
      return res.status(400).json({ error: "Abstract already submitted for this registration" });
      error_log.push({ error: "Abstract already submitted for this registration", timestamp: new Date() });
    }

    await insertAbstract({
      registration_id,
      salutation,
      first_name,
      last_name,
      designation,
      abstract_title,
      abstract_category,
      keywords,
      file_name: file.originalname,
      file_type: file.mimetype,
      file_size_kb: Math.round(file.size / 1024),
      abstract_file: file.buffer
    });
    res.json({ message: "Abstract submitted successfully" });
  } catch (err) {
    console.error("Error processing abstract submission:", err);
    error_log.push({ error: err.message, timestamp: new Date() });
    res.status(500).json({ error: "Internal server error" });
  }

  console.log("Current error log:", error_log); //Error Dump array to track errors with timestamps
    
});


  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });