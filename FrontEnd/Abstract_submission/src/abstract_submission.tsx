import React, { useState } from "react";

const AbstractSubmission = () => {
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

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setMessage("Only PDF or DOCX files are allowed");
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setMessage("File size must be less than 2MB");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.registration_id || !file) {
      setMessage("Registration ID and file are required");
      return;
    }

    const payload = new FormData();

    Object.keys(formData).forEach((key) => {
      payload.append(key, formData[key]);
    });

    payload.append("abstract_file", file);

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:3000/submit-abstract", {
        method: "POST",
        body: payload
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setMessage(" Abstract submitted successfully");
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

    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Abstract Submission</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
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
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <input
          type="text"
          name="abstract_title"
          placeholder="Abstract Title"
          value={formData.abstract_title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="abstract_category"
          placeholder="Abstract Category"
          value={formData.abstract_category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="keywords"
          placeholder="Keywords (comma separated)"
          value={formData.keywords}
          onChange={handleChange}
        />

        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Abstract"}
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold"
  }
};

export default AbstractSubmission;
