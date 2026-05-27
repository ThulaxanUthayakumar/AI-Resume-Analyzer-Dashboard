import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="p-5">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

      </div>

    </div>
  );
}

export default Dashboard;