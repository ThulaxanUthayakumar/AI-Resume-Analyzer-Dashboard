import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-5">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;