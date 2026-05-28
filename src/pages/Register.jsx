import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    alert("Registration Success");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border p-3 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-black text-white p-3 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;