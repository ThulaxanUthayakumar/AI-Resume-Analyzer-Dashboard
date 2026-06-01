import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {

  const stats = [
    {
      title: "Total Resumes",
      value: 120
    },
    {
      title: "AI Analyzed",
      value: 98
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

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-8">

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h1 className="text-3xl font-bold">
            Welcome Thulaxan 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Here's your AI Resume Analytics Dashboard
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {stats.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;