import { useState } from "react";

function ResumeUpload({ onUpload }) {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PDF and DOCX files are allowed");
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = () => {

    if (!file) {
      alert("Please select a resume");
      return;
    }

    onUpload(file);

    setFile(null);

    alert("Resume uploaded successfully");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      {file && (
        <div className="mt-4">

          <p>
            <strong>Name:</strong> {file.name}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {(file.size / 1024).toFixed(2)} KB
          </p>

        </div>
      )}

      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
      >
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;