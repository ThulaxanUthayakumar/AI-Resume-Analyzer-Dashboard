import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">

      <h1 className="text-5xl font-bold mb-5">
        AI Resume Analyzer
      </h1>

      <p className="text-gray-600 mb-5">
        Analyze resumes using AI Dashboard
      </p>

      <div className="flex gap-5">

        <Link
          to="/login"
          className="bg-black text-white px-5 py-3 rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-500 text-white px-5 py-3 rounded"
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Home;