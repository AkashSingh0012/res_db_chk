import React, { useState } from "react";

// 🔧 DEV FLAG — flip this to true when re-enabling file upload
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

  // 🔹 Isolated file state (inactive for now)
  const [file, setFile] = useState<File | null>(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Isolated file handler (not used unless flag is true)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ENABLE_FILE_UPLOAD) return;

    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
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

      //  Branch based on isolation flag
      if (ENABLE_FILE_UPLOAD) {
        // --- FILE MODE (inactive for now) ---
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
        // --- METADATA-ONLY MODE (current) ---
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

    } catch (err: any) {
      setMessage(" ERROR " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Abstract Submission (Dev Mode)</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="registration_id" placeholder="Registration ID" value={formData.registration_id} onChange={handleChange} required />
        <select name="salutation" value={formData.salutation} onChange={handleChange} required>
          <option value="">Select Salutation</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
          <option value="Prof">Prof</option>
        </select>
        <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
        <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
        <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
        <input name="abstract_title" placeholder="Abstract Title" value={formData.abstract_title} onChange={handleChange} required />
        <input name="abstract_category" placeholder="Abstract Category" value={formData.abstract_category} onChange={handleChange} />
        <input name="keywords" placeholder="Keywords" value={formData.keywords} onChange={handleChange} />

        {/* 🔹 File input rendered but isolated */}
        {ENABLE_FILE_UPLOAD && (
          <input type="file" onChange={handleFileChange} />
        )}

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

export default Abstract_submission_dev;
