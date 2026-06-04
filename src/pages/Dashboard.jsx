import { useState } from "react";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ResumeUpload from "../components/ResumeUpload";
import ResumeList from "../components/ResumeList";

function Dashboard() {

  const [resumes, setResumes] = useState([]);

  const stats = [
    {
      title: "Total Resumes",
      value: resumes.length
    },
    {
      title: "AI Analyzed",
      value: 0
    },
    {
      title: "Users",
      value: 45
    },
    {
      title: "Skills",
      value: 350
    },
    {
      title: "Average Score",
      value: "87%"
    },
    {
      title: "Pending Reviews",
      value: 12
    }
  ];

  const handleUpload = (file) => {

    setResumes((prev) => [...prev, file]);
  };

  const handleDelete = (index) => {

    setResumes(
      resumes.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h1 className="text-3xl font-bold">
            Welcome Thulaxan 👋
          </h1>

          <p className="text-gray-500 mt-2">
            AI Resume Analyzer Dashboard
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">

          {stats.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
            />
          ))}

        </div>

        <ResumeUpload
          onUpload={handleUpload}
        />

        <ResumeList
          resumes={resumes}
          onDelete={handleDelete}
        />

      </div>

    </div>
  );
}

export default Dashboard;