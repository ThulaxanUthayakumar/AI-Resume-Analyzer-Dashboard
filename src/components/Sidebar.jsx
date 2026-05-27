function Sidebar() {

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">

      <h1 className="text-2xl font-bold mb-5">
        Dashboard
      </h1>

      <ul className="space-y-3">

        <li>Overview</li>

        <li>Resumes</li>

        <li>Analytics</li>

      </ul>

    </div>
  );
}

export default Sidebar;