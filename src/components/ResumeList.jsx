function ResumeList({ resumes, onDelete }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-2xl font-bold mb-4">
        Uploaded Resumes
      </h2>

      {resumes.length === 0 ? (
        <p>No resumes uploaded yet.</p>
      ) : (
        resumes.map((resume, index) => (

          <div
            key={index}
            className="flex justify-between items-center border p-3 rounded mb-3"
          >

            <div>

              <p className="font-medium">
                {resume.name}
              </p>

              <p className="text-sm text-gray-500">
                {(resume.size / 1024).toFixed(2)} KB
              </p>

            </div>

            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>

        ))
      )}

    </div>
  );
}

export default ResumeList;