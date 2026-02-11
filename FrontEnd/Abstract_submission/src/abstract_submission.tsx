import React, { useState } from "react";
import "./abstract_submission.css";

//  DEV FLAG — flip this to true when re-enabling file upload
const ENABLE_FILE_UPLOAD = true;

const Abstract_submission_dev = () => {
  const [formData, setFormData] = useState({
    registration_id: "",
    salutation: "",
    first_name: "",
    last_name: "",
    designation: "",
    abstract_title: "",
    abstract_category: "",
    keywords: ""
  });

  // File + preview state
  const [file, setFile] = useState<File | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 File handler with preview popup
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ENABLE_FILE_UPLOAD) return;

    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const url = URL.createObjectURL(selectedFile);
    setPreviewURL(url);
    setPreviewOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.registration_id) {
      setMessage("Registration ID is required");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      let res: Response;

      if (ENABLE_FILE_UPLOAD) {
        const payload = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
          payload.append(key, value);
        });

        if (file) {
          payload.append("abstract_file", file);
        }

        res = await fetch("http://localhost:3000/submit-abstract", {
          method: "POST",
          body: payload
        });
      } else {
        res = await fetch("http://localhost:3000/submit-abstract", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setMessage("Abstract submitted successfully");

      setFormData({
        registration_id: "",
        salutation: "",
        first_name: "",
        last_name: "",
        designation: "",
        abstract_title: "",
        abstract_category: "",
        keywords: ""
      });

      setFile(null);
      setPreviewURL(null);
      setPreviewOpen(false);
    } catch (err: any) {
      setMessage("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="abstract-container">
      <h2>Abstract Submission</h2>

      <form onSubmit={handleSubmit} className="abstract-form">
        <input
          name="registration_id"
          placeholder="Registration ID"
          value={formData.registration_id}
          onChange={handleChange}
          required
        />

        <select
          name="salutation"
          value={formData.salutation}
          onChange={handleChange}
          required
        >
          <option value="">Select Salutation</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>

        <input
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <input
          name="abstract_title"
          placeholder="Abstract Title"
          value={formData.abstract_title}
          onChange={handleChange}
          required
        />

        <input
          name="abstract_category"
          placeholder="Abstract Category"
          value={formData.abstract_category}
          onChange={handleChange}
        />

        <input
          name="keywords"
          placeholder="Keywords"
          value={formData.keywords}
          onChange={handleChange}
        />

        {ENABLE_FILE_UPLOAD && (
          <input type="file" onChange={handleFileChange} />
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Abstract"}
        </button>
      </form>

      {message && <p className="abstract-message">{message}</p>}

      {/* 🔹 Preview Modal */}
      {previewOpen && previewURL && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-button"
              onClick={() => {
                setPreviewOpen(false);
                URL.revokeObjectURL(previewURL);
              }}
            >
              ✖
            </button>

            <h3>File Preview</h3>

            {file?.type.startsWith("image/") && (
              <img
                src={previewURL}
                alt="Preview"
                className="preview-image"
              />
            )}

            {file?.type === "application/pdf" && (
              <iframe
                src={previewURL}
                title="PDF Preview"
                className="preview-iframe"
              />
            )}

            {!file?.type.startsWith("image/") &&
              file?.type !== "application/pdf" && (
                <p>
                  Preview not supported for this file type.
                  <br />
                  <strong>{file?.name}</strong>
                </p>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Abstract_submission_dev;
