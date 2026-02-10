/*import express from "express";
import cors from "cors";
import {
  getRegistrationById,
  abstractExists,
  insertAbstract
} from "./database.js";

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route
app.post("/submit-abstract", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const {
      registration_id,
      salutation,
      first_name,
      last_name,
      designation,
      abstract_title,
      abstract_category,
      keywords
    } = req.body || {};

    if (!registration_id) {
      return res.status(400).json({ error: "Missing registration_id" });
    }

    const reg = await getRegistrationById(registration_id);
    if (!reg) {
      return res.status(400).json({ error: "Invalid Registration ID" });
    }

    if (
      reg.salutation.toUpperCase().trim() !== salutation.toUpperCase().trim() ||
      reg.first_name.toUpperCase().trim() !== first_name.toUpperCase().trim() ||
      reg.last_name.toUpperCase().trim() !== last_name.toUpperCase().trim()
    ) {
      return res.status(400).json({ error: "Name does not match registration" });
    }

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
      file_name: null,
      file_type: null,
      file_size_kb: null,
      abstract_file: null
    });

    res.json({ message: "Abstract metadata submitted successfully (no file)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

// Static last
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
*/



import express from "express";
import cors from "cors";
import multer from "multer";
import {
  getRegistrationById,
  abstractExists,
  insertAbstract
} from "./database.js";

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
const mapFileType = (mimetype) => {
  if (mimetype === "application/pdf") return "PDF";
  if (mimetype === "application/msword") return "DOC";
  if (
    mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  )
    return "DOCX";
  return "UNKNOWN";
};

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Multer setup
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }
});

// API route (multer added)
app.post(
  "/submit-abstract",
  upload.single("abstract_file"),
  async (req, res) => {
    try {
      console.log("REQ BODY:", req.body);
      console.log("REQ FILE:", req.file?.originalname);

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

      const normalize = (v) =>
        v.replace(/\./g, "").trim().toUpperCase();

      const reg = await getRegistrationById(registration_id);

      if (
        normalize(reg.salutation) !== normalize(salutation) ||
        normalize(reg.first_name) !== normalize(first_name) ||
        normalize(reg.last_name) !== normalize(last_name)
      ) {
        return res.status(400).json({ error: "Name does not match registration" });
      }

      // 🔹 STILL placeholders
      const file = req.file;

if (!file) {
  return res.status(400).json({ error: "Abstract file is required" });
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
  file_type: mapFileType(file.mimetype), // ✅ FIX
  file_size_kb: Math.ceil(file.size / 1024),
  abstract_file: file.buffer
});


      res.json({ message: "Step 1 OK — file received" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
);

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
