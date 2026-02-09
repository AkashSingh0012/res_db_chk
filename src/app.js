import express from "express";
import {
  getRegistrationById,
  abstractExists,
  insertAbstract
} from "./database.js";
const app = express();
app.post("/submit-abstract", async (req, res) => {
  try {
    const {
      registration_id,
      salutation,
      first_name,
      last_name,
      designation,
      abstract_title
    } = req.body;

    const file = req.file;

    if (!registration_id || !file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (file.size > 2 * 1024 * 1024) {
      return res.status(400).json({ error: "File exceeds 2 MB limit" });
    }

    const reg = await getRegistrationById(registration_id);
    if (!reg) {
      return res.status(400).json({ error: "Invalid Registration ID" });
    }
    if (
      reg.salutation !== salutation ||
      reg.first_name.toUpperCase().trim() !== first_name.toUpperCase().trim() ||
      reg.last_name.toUpperCase().trim() !== last_name.toUpperCase().trim()
    ) {
      return res.status(400).json({ error: "Name does not match registration" });
    }

    if (await abstractExists(registration_id)) {
      return res.status(400).json({ error: "Abstract already submitted" });
    }

    await insertAbstract({
      ...req.body,
      file_name: file.originalname,
      file_type: file.mimetype === "application/pdf" ? "PDF" : "DOCX",
      file_size_kb: Math.ceil(file.size / 1024),
      abstract_file: file.buffer
    });

    res.json({ message: "Abstract submitted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});