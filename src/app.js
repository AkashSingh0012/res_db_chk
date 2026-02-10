
import express from "express";
import multer from "multer";
import {
  getRegistrationById,
  abstractExists,
  insertAbstract
} from "./database.js";

const app = express();

// JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.use(express.static("public"));

// Multer config
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only PDF, DOC, DOCX allowed"));
    }
    cb(null, true);
  }
});
// POST route
app.post("/submit-abstract", upload.single("abstract_file"), async (req, res) => {
  try {
    const {
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
    if (!registration_id || !file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const reg = await getRegistrationById(registration_id);
    if (!reg) return res.status(400).json({ error: "Invalid Registration ID" });

    if (
      reg.salutation !== salutation ||
      reg.first_name.toUpperCase().trim() !== first_name.toUpperCase().trim() ||
      reg.last_name.toUpperCase().trim() !== last_name.toUpperCase().trim()
    ) return res.status(400).json({ error: "Name does not match registration" });

    if (await abstractExists(registration_id)) {
      return res.status(400).json({ error: "Abstract already submitted" });
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
      file_type: file.mimetype === "application/pdf" ? "PDF" : "DOCX",
      file_size_kb: Math.ceil(file.size / 1024),
      abstract_file: file.buffer
    });

    res.json({ message: "Abstract submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

