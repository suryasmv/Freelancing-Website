import React, { useState } from "react";

function FreelancerRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the data object to be sent to the server
    const data = {
      name,
      email,
      password,
      confirmPassword,
      phoneNumber,
      description,
    };

    try {
      // Send the data to the server using a POST request
      const response = await fetch(
        "http://localhost:4000/api/freelancer-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Handle the response from the server
      const responseData = await response.json();

      if (response.ok) {
        // Display success message to the user
        alert(responseData.message);
      } else {
        // Display error message to the user
        alert(`Registration failed: ${responseData.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-center bg-cover h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
      }}
    >
      <div className="flex justify-end h-full">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="bg-white p-8 rounded-lg w-1/3 m-10"
          style={{ overflow: "scroll" }}
        >
          <label className="block text-black font-bold mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <label className="block text-black font-bold mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <label className="block text-black font-bold mb-2">
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <label className="block text-black font-bold mb-2">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)} className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <label className="block text-black font-bold mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <label className="block text-black font-bold mb-2">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-600 p-2 w-full rounded-md"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FreelancerRegistrationForm;
