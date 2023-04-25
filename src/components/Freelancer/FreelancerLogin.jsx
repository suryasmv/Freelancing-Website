import React, { useState } from "react";
import { Link } from "react-router-dom";

const FreelancerLogin = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/freelancer-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();

      if (response.ok) {
        alert(responseData.message);
      } else {
        alert(`Login failed: ${responseData.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
<div
    className="bg-center bg-cover h-screen"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')" }}
  >
    <div className="flex justify-end h-full">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-1/3 m-10">
        <h2 className="text-2xl font-extrabold mb-4 text-black">Freelancer Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-black font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-600 p-2 w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
        <div className="mt-4">
            Dont't have an account?{" "}
            <Link to="/freelancer-signup" className="text-blue-500 underline">Sign up</Link>
        </div>
      </form>
    </div>
  </div>
  );
};
export default FreelancerLogin;
