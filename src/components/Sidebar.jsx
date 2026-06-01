import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        AI Resume Analyzer
      </h1>

      <ul className="space-y-4">

        <li>
          <Link
            to="/dashboard"
            className="hover:text-blue-400"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/resumes"
            className="hover:text-blue-400"
          >
            Resumes
          </Link>
        </li>

        <li>
          <Link
            to="/analytics"
            className="hover:text-blue-400"
          >
            Analytics
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className="hover:text-blue-400"
          >
            Settings
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;